/* eslint-disable no-alert */
const credits = 23580;
const pricePerDroid = 3000;
let message;
const MESSAGE_CANCEL_FROM_CLIENT = 'Отменено пользователем!';
const MESSEGE_NOT_ENUOGH_FUNDS = 'Недостаточно средств на счету!';

const howMany = prompt('Сколько вы хотите приобрести?');
const totalPrice = credits - howMany * pricePerDroid;
const PERCHASE_NOTICE = `Вы купили ${howMany} дроидов, на счету осталось ${totalPrice} кредитов.`;
if (howMany === null) {
  message = MESSAGE_CANCEL_FROM_CLIENT;
} else if (howMany * pricePerDroid >= credits) {
  message = MESSEGE_NOT_ENUOGH_FUNDS;
} else if (howMany * pricePerDroid <= credits) {
  message = PERCHASE_NOTICE;
}
alert(message);
