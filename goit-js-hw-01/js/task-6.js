/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
let input;
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  input = Number.parseFloat(input);

  total += input;

  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    console.log('Было введено не число, попробуйте еще раз');
  }
}
