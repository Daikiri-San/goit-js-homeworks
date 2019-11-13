import refreshList from './components/menu';
import data from './db/menu.json';
import refs from './utils/refs';
import './interface/theme';

refreshList(data, refs.menu);
