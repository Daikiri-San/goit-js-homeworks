/* eslint-disable no-unused-vars */
const refs = {
  amount: document.querySelector('#controls'),
  divs: document.querySelector('#boxes'),
  input: document.querySelector('input[type="number"]'),
};

function createBoxes(amount) {
  let element = '';
  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const rgbRedNumber = Math.floor(Math.random() * 255);
      const rgbGreenNumber = Math.floor(Math.random() * 255);
      const rgbBlueNumber = Math.floor(Math.random() * 255);

      const rgb = `rgb(${rgbRedNumber}, ${rgbGreenNumber}, ${rgbBlueNumber})`;
      const size = (i + 3) * 10;

      element += `
        <div style="background-color: ${rgb}; width:${size}px; height:${size}px;"></div>
        `;
    }
  }

  return element;
}

const makeActions = {
  render() {
    refs.divs.insertAdjacentHTML('beforeend', createBoxes(refs.input.value));
  },

  destroy() {
    refs.divs.innerHTML = '';
  },
};
/* 'if' here for not cause error in console, when click
 was on something that is not a button */
const handleClick = ({ target }) => {
  if (target.tagName === 'BUTTON') {
    makeActions[target.dataset.action]();
  }
};

refs.amount.addEventListener('click', handleClick);
