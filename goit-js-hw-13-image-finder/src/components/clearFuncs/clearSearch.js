import refs from '../../utils/refs';

function clearSearch() {
  refs.gallery.innerHTML = '';
  refs.searchForm.query.value = '';
}

export default clearSearch;
