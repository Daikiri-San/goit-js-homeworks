/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const { DEPOSIT, WITHDRAW } = Transaction;
let id;
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    id = Math.floor(Math.random() * 25555555).toString(16);
    const transactDepObj = { id, type: DEPOSIT, amount };
    this.addTransaction(transactDepObj);
    const addDeposit = this.balance + amount;
    return (this.balance = addDeposit);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return `Недостаточно средств для снятие данной суммы! На вашем счету ${this.balance}!`;
    }
    id = Math.floor(Math.random() * 25555555).toString(16);
    const transactDrawObj = { id, type: WITHDRAW, amount };
    this.addTransaction(transactDrawObj);
    const withdrawal = this.balance - amount;
    return (this.balance = withdrawal);
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(transactionID) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (transactionID === this.transactions[i]) {
        return this.transactions[i];
      }
    }
    return 'Такой транзакции нету!';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const key of this.transactions) {
      const { type: transactionType, amount } = key;
      if (transactionType === type) {
        total += +amount;
      }
    }
    return total;
  },
};

const { balance, transactions: transactionStory } = account;

console.log(balance);
console.log(account.deposit(50));
console.log(account.withdraw(40));
console.log(account.deposit(200));
console.log(account.withdraw(130));
console.log(account.withdraw(90));
console.table(transactionStory);
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
