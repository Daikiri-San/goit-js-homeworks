const products = 'apple orange grape watermelon kiwi bananas';
const sales = 'watermelon';
const newProducts = 'melon tomato';
let stock;

const positionStart = products.indexOf('watermelon');
const positionEnd = products.indexOf('watermelon') + 'watermelon'.length;

stock =
  products.slice(0, positionStart) + newProducts + products.slice(positionEnd);

console.log(stock);
console.assert('apple orange grape melon tomato kiwi bananas', 'Error');
