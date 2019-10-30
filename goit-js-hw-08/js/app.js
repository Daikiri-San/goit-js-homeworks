/* eslint-disable import/extensions */
/* eslint-disable no-lone-blocks */
import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  button: document.querySelector('button[data-action="close-lightbox"]'),
  imageLightbox: document.querySelector('img.lightbox__image'),
};

function createMarkup(array) {
  let wholeMarkup = '';
  array.forEach((element) => {
    const { preview, original, description } = element;
    wholeMarkup += `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src=""
        data-lazy="${preview}"
        data-source="${original}"
        alt="${description}"
      />
  
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;
  });
  return wholeMarkup;
}

const markup = createMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', markup);

function openModal(event) {
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains('gallery__image')) {
    return;
  }
  refs.imageLightbox.setAttribute('src', target.dataset.source);
  refs.imageLightbox.setAttribute('alt', target.alt);
  refs.lightbox.classList.add('is-open');
}

function closeModal() {
  refs.lightbox.classList.remove('is-open');
  refs.imageLightbox.removeAttribute('src');
  refs.imageLightbox.removeAttribute('alt');
}

function closeModalByClick({ target }) {
  if (target.className !== 'lightbox__content') {
    return;
  }
  refs.lightbox.classList.remove('is-open');
  refs.imageLightbox.removeAttribute('src');
  refs.imageLightbox.removeAttribute('alt');
}

function closeModalByEsc(event) {
  if (event.keyCode !== 27) {
    return;
  }
  refs.lightbox.classList.remove('is-open');
  refs.imageLightbox.removeAttribute('src');
  refs.imageLightbox.removeAttribute('alt');
}

function nextImg(event) {
  if (event.keyCode === 37 || event.keyCode === 39) {
    const currentValues = refs.imageLightbox;
    if (!currentValues.hasAttribute('src')) {
      return;
    }
    const { src } = currentValues;
    const array = Array.from(galleryItems);
    const current = array.findIndex(el => el.original === src);
    let next = current;
    if (current !== -1) {
      if (event.keyCode === 37) next -= 1;
      if (event.keyCode === 39) next += 1;
      if (next <= 0) next = 0;
      if (next >= array.length - 1) next = array.length - 1;
      refs.imageLightbox.removeAttribute('src');
      refs.imageLightbox.removeAttribute('alt');
      const { original, description } = array[next];
      refs.imageLightbox.setAttribute('src', original);
      refs.imageLightbox.setAttribute('alt', description);
    }
  }
}

const lazyLoad = (target) => {
  const options = {
    rootMargin: '300px 0px',
    threshold: 0.01,
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageUrl = img.dataset.lazy;

        img.setAttribute('src', imageUrl);
        img.classList.add('fade-in');

        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};

refs.imeges = document.querySelectorAll('.gallery__image');
refs.imeges.forEach((image) => {
  lazyLoad(image);
});

refs.gallery.addEventListener('click', openModal);
refs.button.addEventListener('click', closeModal);
refs.lightbox.addEventListener('click', closeModalByClick);
window.document.addEventListener('keydown', closeModalByEsc);
window.document.addEventListener('keydown', nextImg);
