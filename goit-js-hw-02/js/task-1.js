/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */

const logItems = (array) => {
  let message;
  for (let i = 0; i < array.length; i += 1) {
    message = `${i + 1} - ${array[i]}`;
    console.log(message);
  }
  return message;
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
