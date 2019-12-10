import * as basicLightbox from 'basiclightbox';

function openLightBox({ target }) {
  if (!target.classList.contains('currentImg')) {
    return;
  }
  const largeImg = target.dataset.source;
  const image = `<img class="modalImg" src="${largeImg}" width="800" height="600">`;
  const instance = basicLightbox.create(image);
  instance.show();
  document.body.addEventListener('keydown', (event) => {
    if (event.keyCode !== 27) {
      return;
    }
    instance.close();
  });
}

export default openLightBox;
