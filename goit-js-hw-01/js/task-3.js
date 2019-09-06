/* eslint-disable no-alert */
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const MESSAGE_LOGIN_SUCCESS = 'Добро пожаловать!';
const MESSAGE_ACCES_DENIED = 'Доступ запрещен, неверный пароль!';
const MESSAGE_CANCEL_FROM_USER = 'Отменено пользователем!';

const password = prompt('Введите ваш пароль');
if (password === null) {
  message = MESSAGE_CANCEL_FROM_USER;
} else if (password === ADMIN_PASSWORD) {
  message = MESSAGE_LOGIN_SUCCESS;
} else if (password !== ADMIN_PASSWORD) {
  message = MESSAGE_ACCES_DENIED;
}
alert(message);
