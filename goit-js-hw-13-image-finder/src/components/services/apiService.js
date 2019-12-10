/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
import pnotifyNoMatchesFound from '../vendors/pnotifyNoMatchesFound';
import pnotifyInfoEndOfSearch from '../vendors/pnotifyInfoEndOfSearch';
import refs from '../../utils/refs';

const baseUrl = 'https://pixabay.com/api/';
const key = '14527568-6591a78188764a7d597b0a4aa';

export default {
  page: 1,
  query: '',
  async fetchImagesApi() {
    try {
      const requestParams = `?q=${this.query}&page=${this.page}&per_page=12&key=${key}`;
      const response = await fetch(baseUrl + requestParams);
      const obj = await response.json();
      const images = obj.hits;
      if (images.length === 0 && refs.gallery.children.length !== 0) {
        pnotifyInfoEndOfSearch();
        return;
      }
      if (images.length === 0) {
        pnotifyNoMatchesFound();
        return;
      }
      this.incrementPage();

      return images;
    } catch (err) {
      pnotifyNoMatchesFound();
      return console.warn(err);
    }
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },
};
