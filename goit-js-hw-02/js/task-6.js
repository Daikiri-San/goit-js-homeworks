/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
let input;
const ENTER_NUMBER = 'Введите число';
const NO_NUMBER = 'Было введено не число, попробуйте еще раз';
const numbers = [];

function count() {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

while (input !== null) {
  input = prompt(ENTER_NUMBER, 0);
  const userNumber = +input;
  console.log(userNumber);
  if (Number.isNaN(userNumber)) {
    alert(NO_NUMBER);
  } else {
    numbers.push(userNumber);
  }
}

const result = `Общая сумма чисел равна ${count(numbers)}`;
alert(result);
