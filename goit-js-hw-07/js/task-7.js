const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

function changeFontSize(el) {
  el.preventDefault();
  const { target } = el;
  refs.span.style.fontSize = `${target.value}px`;
}

refs.input.addEventListener('input', changeFontSize);
