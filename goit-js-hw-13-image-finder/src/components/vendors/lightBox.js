import * as basicLightbox from 'basiclightbox';

function openLightBox({ target }) {
  if (!target.classList.contains('currentImg')) {
    return;
  }
  const largeImg = target.dataset.source;
  const image = `<img class="modalImg" src="${largeImg}" width="800" height="600">`;
  const instance = basicLightbox.create(image);
  instance.show();
  function closeLightBox(event) {
    if (event.keyCode !== 27) {
      return;
    }
    instance.close();
    document.body.removeEventListener('keydown', closeLightBox);
  }
  document.body.addEventListener('keydown', closeLightBox);
}

export default openLightBox;
