import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import fetchImages from '../services/apiService';
import refs from '../../utils/refs';
import imageCards from '../../templates/imageCards.hbs';
import createObserver from './IntObserver';
import createGuardForObserver from '../createFuncs/createGuardforObserver';

const masonryInstance = new Masonry(refs.gallery, {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  transitionDuration: '0.8s',
  gutter: 15,
});

async function searchImages() {
  refs.spinner.classList.add('k-spinner--spin');
  const fetchedArr = await fetchImages.fetchImagesApi();
  if (fetchedArr === undefined) {
    return;
  }

  const markup = fetchedArr.map(obj => imageCards(obj)).join('');
  const proxyEL = document.createElement('div');
  proxyEL.innerHTML = markup;
  const parsedItems = Array.from(proxyEL.querySelectorAll('.grid-item'));

  parsedItems.map((el) => {
    refs.gallery.append(el);
    return masonryInstance.appended(el);
  });
  imagesLoaded(refs.gallery).on('always', () => masonryInstance.layout());
  setTimeout(() => {
    refs.spinner.classList.remove('k-spinner--spin');
  }, 1500);
}

async function searchImagesSubmitHandler(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.query;
  const valueOfQuery = input.value;

  if (valueOfQuery === '') {
    return;
  }

  refs.gallery.innerHTML = '<div class="grid-sizer"></div>';
  refs.searchForm.query.value = '';
  fetchImages.page = 1;
  fetchImages.searchQuery = valueOfQuery;

  await searchImages();

  if (refs.guard) {
    return;
  }
  createGuardForObserver();
  if (fetchImages.page > 1) {
    createObserver(refs.guard, searchImages);
  }
}

refs.searchForm.addEventListener('submit', searchImagesSubmitHandler);
