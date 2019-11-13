import refs from '../utils/refs';
import Theme from './existThemes';

function changeTheme() {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

refs.switchTheme.addEventListener('change', changeTheme);
