import refs from '../../utils/refs';

function createGuardForObserver() {
  const guardian = '<div id="guardian"></div>';
  document.body.insertAdjacentHTML('beforeend', guardian);
  refs.guard = document.querySelector('#guardian');
}

export default createGuardForObserver;
