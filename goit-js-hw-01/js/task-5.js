/* eslint-disable no-alert */
const deliveryToChinaPrice = 100;
const deliveryToChilePrice = 250;
const deliveryToAustraliaPrice = 170;
const deliveryToIndiaDPrice = 80;
const deliveryToJamaicaPrice = 120;

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
    cost = deliveryToChinaPrice;
    alert(`Доставка в ${countryChina} будет стоить ${cost} кредитов`);
    break;
  case 'ЧИЛИ':
    cost = deliveryToChilePrice;
    alert(`Доставка в ${countryChile} будет стоить ${cost} кредитов`);
    break;
  case 'АВСТРАЛИЯ':
    cost = deliveryToAustraliaPrice;
    alert(`Доставка в ${countryAustralia} будет стоить ${cost} кредитов`);
    break;
  case 'ИНДИЯ':
    cost = deliveryToIndiaDPrice;
    alert(`Доставка в ${countryIndia} будет стоить ${cost} кредитов`);
    break;
  case 'ЯМАЙКА':
    cost = deliveryToJamaicaPrice;
    alert(`Доставка в ${countryJamaica} будет стоить ${cost} кредитов`);
    break;
  default:
    alert(NOT_AVAILABLE);
}
