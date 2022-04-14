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

// // ```js
// // /*
// //  * Типов транзацкий всего два.
// //  * Можно положить либо снять деньги со счета.
// //  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// // /*
// //  * Каждая транзакция это объект со свойствами: id, type и amount
// //  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     // 135
//     return {
//       amount, // amount : 135
//       type, // type: 'deposit
//       id: this.transactions.length,
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     // let amount = 135
//     this.balance += amount; // this.balance + 135
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT); // this.createTransaction(135, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "У Вас недостатньо коштів";
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     // let this = account
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "Такої операції не існує";
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(variant) {
//     let total = 0;

//     for (let transaction of this.transactions) {
//       if (transaction.type === variant) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };
// // ```

// console.log(account.getBalance());
// account.deposit(135);
// account.withdraw(50);
// account.withdraw(60);
// account.withdraw(10);
// account.deposit(200);
// account.deposit(2000);
// account.withdraw(500);
// console.log(account.getTransactionDetails(24));
// console.log(account);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// transaction['type'] === transaction.type // 'deposit' 'withdraw'

/////////////////////////////////

// const user = {
//   name: "Bob",
//   age: 12,
// };

// const userName = user.name;
// const userAge = user.age;

// let { name, age } = user;

// let playlist = {
//   nameList: "My List",
//   tracks: ["name1", " name2", "name3"],
// };
// let { nameList, tracks } = playlist;
// tracks.push("name5");

// // const copyTracks = [...tracks]

// console.log(tracks);
// console.log(playlist.tracks);

// // let nameList = playlist.nameList;
// // nameList = "qqqq";

// nameList = "Best list";
// console.log(nameList); // -> Best list

// // но вто же время:
// console.log(playlist); //-> My List

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// ЧОМУ в четвертому обєкті порядок властивостей саме такий?,
// а не:
// console.log(fourth);

// console.log([1, 2, 3]); // {  propC: 50,  propD: 20, propA: 5, propB: 10 }

// const name = user.name
// const age = user.age

// function foo({ username = "User" } = {}) {
//   // undefined
//   console.log(username);
// }

// function foo(obj) {
//   const { username } = obj;
//   console.log(username);
// }

// const user = { username: "Bob" };

// foo(user);
// foo(); // {} => undefined
// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// const arr = [
//   { name: "Bob", age: 13 }, // link #1
//   { name: "John", age: 43 },
// ];

// function test(obj) {
//   for (let el of arr) {
//     console.log(obj === el); // link 1 === link 2
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [1, 2, 3, 4, 5];

// function compareArr(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let el of arr1) {
//     // el = 1 з масиву numbers
//     const index = arr1.indexOf(el); // 0
//     if (el !== arr2[index]) {
//       // 1 з масиву numbers !== numbers2[0] => 1 !== 1
//       return false;
//     }
//   }

//   return true;
// }

// console.log(compareArr(numbers, numbers2));

// function test(...args) {
//   console.log(args);
// }

// test({ name: "Bob" }, [1, 2, 3, 4, 5]);

// test({ name: "Bob", age: 13 }); // link #2

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function calcBMI(props) {
//   const { weight, height } = props;
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```

// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js

// function printContactsInfo(names, phones) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo(params) {
//   const { names, phones } = params;
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // // Было
// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// // // Ожидается
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });
// ```

// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// function getBotReport(params) {
//   const {
//     companyName,
//     bots: { repair, defence },
//   } = params;
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// function getBotReport({ companyName, bots }) {
//   return `${companyName} has ${bots.repair.old + bots.repair.new +  bots.defence} bots in stock`;
// }

// function getBotReport({ companyName, bots }) {
//   const { repair, defence } = bots;
//   const { newBots, oldBots } = repair;
//   console.log(bots);
//   return `${companyName}has ${repair + defence} bots in stock`;
// }

// // // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // // Ожидается
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: {
//         newBots: 12,
//         oldBots: 35,
//       },
//       defence: 50,
//     },
//   })
// );
// ); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// `companyName` и `stock` и выводила репорт о количестве товаров на складе любой
// компании.

// ```js

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
// ```

// ## Example 5 - Операция spread

// Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
// объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
// значением "default" если в `partialContact` нет такого свойства.

// ```js
// // Решение

// function createContact(userInfo) {
//   const { list = "default" } = userInfo;
//   return {
//     ...userInfo,
//     id: generateId(),
//     createdAt: "14.04.22",
//     list,
//   };
// }

// function createContact(userInfo) {
//   return {
//     list: "default",
//     ...userInfo,
//     id: generateId(),
//     createdAt: "14.04.22",
//   };
// }

// function createContact(userInfo) {
//   const list = userInfo.list ?? "default";

//   // let list;

//   // if (userInfo.list === undefined) {
//   //   list = "default";
//   // } else {
//   //   list = userInfo.list;
//   // }

//   return {
//     ...userInfo,
//     id: generateId(),
//     createdAt: "14.04.22",
//     list,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }
// ```

// ## Example 6 - Операция rest

// Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
// со свойством `fullName`, вместо `firstName` и `lastName`.

// ```js
// // Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```
