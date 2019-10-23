const refs = {
  input: document.querySelector('#validation-input'),
};

function stringLength(el) {
  el.preventDefault();
  const { target } = el;
  if (target.value.length >= refs.input.dataset.length) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.remove('valid');
    refs.input.classList.add('invalid');
  }
}

refs.input.addEventListener('blur', stringLength);
