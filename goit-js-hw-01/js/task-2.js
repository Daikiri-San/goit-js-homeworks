const total = 100;
let ordered = 50;
let result;

const enoughProducts = 'Заказ оформлен, с вами свяжется менеджер';
const notEnoughProducts = 'На складе недостаточно твоаров!';

if (total > ordered) {
  result = enoughProducts;
} else {
  result = notEnoughProducts;
}

console.log(result);

ordered = 150;

if (total > ordered) {
  result = enoughProducts;
} else {
  result = notEnoughProducts;
}

console.log(result);
