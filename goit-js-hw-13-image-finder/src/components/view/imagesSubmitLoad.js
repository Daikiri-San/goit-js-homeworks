import fetchImages from '../services/apiService';
import clearSearch from '../clearFuncs/clearSearch';
import refs from '../../utils/refs';
import imageCards from '../../templates/imageCards.hbs';
import createObserver from './IntObserver';
import createGuardForObserver from '../createFuncs/createGuardforObserver';
import openLightBox from '../vendors/lightBox';

async function searchImages() {
  const fetchedArr = await fetchImages.fetchImagesApi();
  if (fetchedArr === undefined) {
    return;
  }
  const markup = fetchedArr.map(obj => imageCards(obj)).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

async function searchImagesSubmitHandler(e) {
  e.preventDefault();

  const input = e.currentTarget.elements.query;
  const valueOfQuery = input.value;

  if (valueOfQuery === '') {
    return;
  }

  clearSearch();
  fetchImages.page = 1;
  fetchImages.searchQuery = valueOfQuery;

  await searchImages();
  refs.gallery.addEventListener('click', openLightBox);

  if (refs.guard) {
    return;
  }
  createGuardForObserver();
  if (fetchImages.page > 1) {
    createObserver(refs.guard, searchImages);
  }
}

refs.searchForm.addEventListener('submit', searchImagesSubmitHandler);
