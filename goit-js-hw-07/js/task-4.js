const refs = {
  counter: document.querySelector('#counter'),
  value: document.querySelector('#value'),
};

const actions = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

// 'if' here for not cause error in console, when click was on #value
const handleClick = ({ target }) => {
  if (target.tagName === 'BUTTON') {
    actions[target.dataset.action]();
    refs.value.textContent = actions.counterValue;
  }
};

refs.counter.addEventListener('click', handleClick);
