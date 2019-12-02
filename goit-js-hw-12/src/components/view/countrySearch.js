/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import refs from '../../utils/refs';
import fetchCountries from '../vendors/fetchCountries';
import oneCountry from '../../templates/oneCountry.hbs';
import clearRefs from '../clearFunctions/clearRefs';
import pNotifyError from '../pNotify/pnotifyError';
import pNotifyNotFound from '../pNotify/prontifyNotFound';
import 'pnotify/dist/PNotifyBrightTheme.css';

const debounce = require('lodash.debounce');

let countriesArray;

function searchFromInput(e) {
  const input = e.target.value;
  if (input === '') {
    return;
  }
  return fetchCountries(input).then((data) => {
    if (data.message === 'Not Found') {
      return pNotifyNotFound();
    }

    if (data.length > 10) {
      return pNotifyError();
    }

    if (data.length === 1) {
      clearRefs();
      return fetchCountries(input).then(ar => ar.map(elem => refs.country.insertAdjacentHTML('beforeend', oneCountry(elem)),),);
    }

    countriesArray = fetchCountries(input);

    clearRefs();
    fetchCountries(input)
      .then(ar => ar
          .map(
            (elem, i) => `<li class="list-item" data-index="${i}">${elem.name}</li>`,
          )
          .join(''),)
      .then(markup => refs.list.insertAdjacentHTML('beforeend', markup));

    return countriesArray;
  });
}

function choseOneCountry({ target }) {
  clearRefs();
  countriesArray
    .then(ar => ar.filter((el, i) => i === Number(target.dataset.index)))
    .then(country => country.map(elem => refs.country.insertAdjacentHTML('beforeend', oneCountry(elem)),),);
}

refs.input.addEventListener('input', debounce(searchFromInput, 500));
refs.list.addEventListener('click', choseOneCountry);
