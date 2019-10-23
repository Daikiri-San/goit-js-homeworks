const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

function changeString(el) {
  el.preventDefault();
  const { target } = el;
  refs.span.textContent = target.value;
  if (target.value === '') {
    refs.span.textContent = 'незнакомец';
  }
}

refs.input.addEventListener('input', changeString);
