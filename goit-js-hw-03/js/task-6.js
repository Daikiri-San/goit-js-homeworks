/* eslint-disable no-restricted-syntax */
const calculateTotalPrice = (arr, productName) => {
  let total = 0;
  for (const key of arr) {
    const { name, price, quantity } = key;
    if (productName === name) {
      total = price * quantity;
    }
  }
  return total;
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
