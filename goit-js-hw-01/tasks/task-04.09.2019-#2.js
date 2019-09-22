const products = 'apple orange grape watermelon kiwi bananas';
const sales = 'watermelon';
const newProducts = 'melon tomato';

const positionStart = products.indexOf('sales');
const positionEnd = products.indexOf('sales') + sales.length;

// eslint-disable-next-line no-multi-spaces
const stock =  products.slice(0, positionStart) + newProducts + products.slice(positionEnd);

console.log(stock);
console.assert('apple orange grape melon tomato kiwi bananas', 'Error');
