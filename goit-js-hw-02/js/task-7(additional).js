/* eslint-disable func-names */
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const LENGTH_ERROR = 'Ошибка! Логин должен быть от 4 до 16 символов';
const PASSWORD__RESERVED = 'Такой логин уже используется!';
const PASSWORD__SUCCESS = 'Логин успешно добавлен!';

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    return console.log(LENGTH_ERROR);
  }
  if (isLoginUnique(allLogins, login) === true) {
    return console.log(PASSWORD__RESERVED);
  }
  allLogins.push(login);
  return console.log(PASSWORD__SUCCESS);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
