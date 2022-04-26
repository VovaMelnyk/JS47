// function clickButton() {
//   console.log(this);
// }

// button.addEventListener("click", clickButton);

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     // this = customer
//     return this.balance; // return customer.balance
//   },
//   getDiscount() {
//     // this
//     return this.discount;
//   },
//   setDiscount(value) {
//     // this
//     this.discount = value;
//   },
//   getOrders() {
//     // this
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     // this
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// showThis(); // this in showThis: Window // use strict => undefined

// const user = {
//   username: "Mango",
//   // showContext: function showThis() {
//   //   console.log("this in showThis: ", this);
//   // },
// };

// user.showContext = showThis; // user.showContext = function showThis() {
//   // console.log("this in showThis: ", this);
// // }
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// "use strict";

// function showThis() {
//   console.log(this);
// }

// showThis();

// window.showThis()
// function test() {
//   console.log("test", this);
// }

// const arrow = () => {
//   console.log("arrow", this);
// };

// test();
// arrow();

// const foo = () => {
//   console.log(this);
// };

// foo();

// const user = {
//   name: "Bob",
//   age: 12,
//   test: () => {
//     console.log("this1", this);
//   },

//   // test() {
//   //   console.log("this1", this);
//   // },

//   test2() {
//     console.log("this2", this); // user

//     const test3 = () => {
//       console.log("this3", this); // user
//     };
//     test3();
//   },

//   test2: () => {
//     console.log("this2", this); // window

//     const test3 = () => {
//       console.log("this3", this); // window
//     };
//     test3();
//   },
// };

// user.test();
// user.test2(); // this = user

// # Модуль 5. Занятие 9. Контекст вызова функции и this

// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// ```js
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       (stone) => stone.name === stoneName
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// ```

// ## Example 2 - Телефонная книга

// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// ```js
// const phonebook = {
//   contacts: [],
//   add: (contact) => {
//     console.log("this", this);
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// const phonebook = {
//   name: "book1",
//   contacts: [],
//   add(contact) {
//     console.log("this", this);
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// const phonebook2 = {
//   name: "book2",
//   contacts: [],
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add.call(phonebook2, {
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });

// console.log([1, 2, 3, 4, 5]);

// function getUserName(user) {
//   return user.name;
// }

// const user = {
//   name: "Bob",
// };

// const admin = {
//   name: "John",
// };

// const superUser = {
//   name: "Jack",
// };

// console.log(getUserName(admin));

// call - coma
// apply - array

// const method = phonebook.add;

// method.call(phonebook, {
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });

// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook);
// console.log(phonebook2);

// ```

// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(4, 5);
// console.log(calculator.add());
// console.log(calculator.mult());

// console.log(calculator);

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// ```js
// const calculator = {};
// ```

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// students.map(
//   function (student) {
//     console.log(this);
//   },
//   { name: "Bob" }
// );

// const allCourses = students.flatMap((student) => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// course = математика
// index = 0
// array = allCourses
// allCourses.indexOf(математика) === 0
// 0 === 0 // true
// [математика]

// course = фізика
// index = 1
// array = allCourses
// allCourses.indexOf(фізика) === 1
// 1 === 1 // true
// [математика, фізика]

// course = інформатика
// index = 2
// array = allCourses
// allCourses.indexOf(інформатика) === 2
// 2 === 2 // true
// [математика, фізика, інформатика]

// course = математика
// index = 3
// array = allCourses
// allCourses.indexOf(математика) === 3
// 0 === 3 // false
// [математика, фізика, інформатика]
