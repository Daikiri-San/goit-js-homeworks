/* eslint-disable consistent-return */
/* eslint-disable comma-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
export default function fetchCountries(input) {
  return fetch(`https://restcountries.eu/rest/v2/name/${input}`)
    .then(res => res.json())
    .catch(error => console.log(error));
}
