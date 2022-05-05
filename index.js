// // #1
// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login);

// #2
// class User {
//   constructor({ email }) {
//     this.email = email;
//   }

//   get userEmail() {
//     return this.email;
//   }

//   set userEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ email: "mango@mail.com" });
// console.log(mango);
// const mango = new User("mango@mail.com");

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango); // mango@mail.com

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(mango.email);

// console.log(mango.email);
// #3
// const fnA = (message, fnB) => {
//   console.log(message);
//   console.log(fnB);
//   fnB();
// };

// const fnB = function () {
//   console.log("лог при виклику fnB");
// };

// fnA("привіт", fnB);

// #4 reduce array

// const numbers = [
//   [1, 2],
//   [3, 4, 5],
//   [6, 7],
// ];
// const result = numbers.reduce((acc, el) => [...acc, ...el], []);
// // 1
// // [...[], ...[1,2]]
// console.log(result);

// const numbers = [10, 134, 56, 45];
// console.log(numbers.indexOf(87));

// #5 This
