const total = 100;
let ordered = 50;

const enoughProducts = 'Заказ оформлен, с вами свяжется менеджер';
const notEnoughProducts = 'На складе недостаточно твоаров!';

let result = total > ordered ? enoughProducts : notEnoughProducts;

console.log(result);

ordered = 150;

result = total > ordered ? enoughProducts : notEnoughProducts;

console.log(result);
