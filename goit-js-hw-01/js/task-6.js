/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
let input;
let total = 0;
const ENTER_NUMBER = 'Введите число';
const NO_NUMBER = 'Было введено не число, попробуйте еще раз';
const MESSAGE_CANCEL_FROM_USER = 'Отменено пользователем!';

while (input !== null) {
  input = prompt(ENTER_NUMBER, 0);
  const userNumber = +input;
  if (Number.isNaN(userNumber)) {
    alert(NO_NUMBER);
  } else {
    total += userNumber;
  }
}
if (total === 0) {
  alert(MESSAGE_CANCEL_FROM_USER);
} else {
  const RESULT = `Общая сумма чисел равна ${total}`;
  alert(RESULT);
}
