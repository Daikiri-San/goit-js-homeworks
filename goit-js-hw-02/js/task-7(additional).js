/* eslint-disable func-names */
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const LENGTH_ERROR = 'Ошибка! Логин должен быть от 4 до 16 символов';
const PASSWORD_RESERVED = 'Такой логин уже используется!';
const PASSWORD_SUCCESS = 'Логин успешно добавлен!';

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) {
    return console.log(LENGTH_ERROR);
  }
  if (isLoginUnique(allLogins, login)) {
    return console.log(PASSWORD_RESERVED);
  }
  allLogins.push(login);
  return console.log(PASSWORD_SUCCESS);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
