/* eslint-disable no-alert */
const countryChina = 'Китай';
const countryChile = 'Чили';
const countryAustralia = 'Австралия';
const countryIndia = 'Индия';
const countryJamaica = 'Ямайка';
const NOT_AVAILABLE = 'В вашей стране доставка не доступна';

let cost;

const delivery = prompt('В какую страну необходима доставка?');
switch (delivery.toUpperCase()) {
  case 'КИТАЙ':
    cost = 100;
    alert(`Доставка в ${countryChina} будет стоить ${cost} кредитов`);
    break;
  case 'ЧИЛИ':
    cost = 250;
    alert(`Доставка в ${countryChile} будет стоить ${cost} кредитов`);
    break;
  case 'АВСТРАЛИЯ':
    cost = 170;
    alert(`Доставка в ${countryAustralia} будет стоить ${cost} кредитов`);
    break;
  case 'ИНДИЯ':
    cost = 80;
    alert(`Доставка в ${countryIndia} будет стоить ${cost} кредитов`);
    break;
  case 'ЯМАЙКА':
    cost = 120;
    alert(`Доставка в ${countryJamaica} будет стоить ${cost} кредитов`);
    break;
  default:
    alert(NOT_AVAILABLE);
}
