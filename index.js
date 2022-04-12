// const user = {
//   name: "John",
//   age: 12,
//   status: true,
// };

// const model = "A8";
// const mark = "audi";
// const color = "red";
// const price = 100;

// const car = {
//   model: "A8",
//   mark: "audi",
//   color: "red",
//   price: 100,
//   owner: {
//     name: "John",
//     age: 12,
//     status: true,
//   },
// };

// car.owner = user;

// console.log(car);

// const price = car.price;

// const { model, mark, color, price } = car;

// console.log(car.model);
// console.log(car.color);
// console.log(car.price);
// console.log(car.mark);

// function getName() {
//   let a = "Hello";
// }

// getName();
// user;

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола"; // user["name"] = "Генри Сибола"; // user.name = "Генри Сибола";
// console.log(user.age); // 'Генри Сибола'

// const user = {
//   name: "John",
//   age: 25,

//   getName() {
//     return user.name;
//   },

//   getAge() {
//     return user.age;
//   },

//   getUserInfo() {
//     return `${user.getName()} ${user.getAge()}`;
//   },
// };

// console.log(user.getUserInfo());

// # Модуль 3. Занятие 1. Объекты

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function countSalary(obj) {
//   const values = Object.values(obj);

//   let total = 0;

//   for (let value of values) {
//     total += value;
//   }
//   return total;
// }

// console.log(countSalary(salaries));
// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   // Шукаємо обєкт в масиві
//   for (let stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Stone not found";
// }

// function calcTotalPrice(stones, stoneName) {
//   // Шукаємо обєкт в масиві
//   for (let stone of stones) {
//     if (stone.name.includes(stoneName)) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Stone not found";
// }

// console.log(calcTotalPrice(stones, "Щебень"));
// ```

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    // 135
    return {
      amount, // amount : 135
      type, // type: 'deposit
      id: this.transactions.length,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    // let amount = 135
    this.balance += amount; // this.balance + 135
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT); // this.createTransaction(135, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "У Вас недостатньо коштів";
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    // let this = account
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Такої операції не існує";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(variant) {
    let total = 0;

    for (let transaction of this.transactions) {
      if (transaction.type === variant) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
// ```

console.log(account.getBalance());
account.deposit(135);
account.withdraw(50);
account.withdraw(60);
account.withdraw(10);
account.deposit(200);
account.deposit(2000);
account.withdraw(500);
console.log(account.getTransactionDetails(24));
console.log(account);
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// transaction['type'] === transaction.type // 'deposit' 'withdraw'
