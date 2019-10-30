/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
const refs = {
  input: document.querySelector('input[type="number"]'),
  create: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function gerRandomRGB() {
  return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

const SIZE = 30;

function createBoxes(amount) {
  let div;
  if (amount > 0 && amount <= 100) {
    if (refs.boxes.lastChild === null) {
      return Array(amount)
        .fill('')
        .map((e, i) => {
          const attr = i;
          div = document.createElement('div');
          div.setAttribute('data-attr', attr);
          div.style.cssText = `width: ${SIZE + i * 10}px; height: ${SIZE
            + i * 10}px; background-color: ${gerRandomRGB()}`;
          return div;
        });
    }
    return Array(amount)
      .fill('')
      .map((e, i) => {
        div = document.createElement('div');
        const prevIndex =          i + 1 + Number(refs.boxes.lastElementChild.dataset.attr);
        const varForSize =          i + 1 + 3 + Number(refs.boxes.lastElementChild.dataset.attr);
        const dataAttr = prevIndex;
        const size = varForSize * 10;
        div.setAttribute('data-attr', dataAttr);
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${gerRandomRGB()}`;
        return div;
      });
  }
  return div;
}

function setBoxes() {
  const num = +refs.input.value;
  refs.boxes.append(...createBoxes(num));
}
function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}
refs.create.addEventListener('click', setBoxes);
refs.destroy.addEventListener('click', destroyBoxes);
