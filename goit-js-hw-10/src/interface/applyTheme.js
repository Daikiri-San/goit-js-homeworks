import refs from '../utils/refs';
import Theme from './existThemes';

export default function applyTheme() {
  let currentTheme;
  if (localStorage.getItem('theme')) {
    currentTheme = localStorage.getItem('theme');
    refs.body.classList.add(currentTheme);
    if (localStorage.getItem('theme') === Theme.DARK) {
      refs.switchTheme.checked = true;
    }
  } else {
    currentTheme = localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
  }
  return currentTheme;
}
