/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
import axios from 'axios';
import pnotifyNoMatchesFound from '../vendors/pnotifyNoMatchesFound';
import pnotifyInfoEndOfSearch from '../vendors/pnotifyInfoEndOfSearch';
import refs from '../../utils/refs';

axios.defaults.baseURL = 'https://pixabay.com/api';

const key = '14527568-6591a78188764a7d597b0a4aa';

export default {
  page: 1,
  query: '',
  async fetchImagesApi() {
    try {
      const { data } = await axios.get('/', {
        params: {
          q: this.query,
          page: this.page,
          per_page: 12,
          key,
        },
      });
      const images = await data.hits;
      if (images.length === 0 && refs.gallery.children.length !== 1) {
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
