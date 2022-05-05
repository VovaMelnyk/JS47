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

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   const makeSoup = function (dish) {
//     console.log(` готовит ${dish}`);
//   };

//   return makeDish;

//   //   return { createDish: makeDish, createSoup: makeDish }; // function (dish) {
//   // console.log(`${name} готовит ${dish}`);
//   //   };
// };

// const mango = makeSheff("Mango")("Пирожок"); // Mango scope + Global scope = Lexical environment => словник
// name = Mango
// makeDish = function
// console.log(mango);
// mango("пирожок");
// mango("котлеты");

// const poly = makeSheff("Polly"); // Poly scope + Global scope = Lexical environment => словник
// // name = Polly
// // makeDish = function
// console.log(poly);
// poly("чай");
// poly("омлет");
// debugger;
// const numbers = [1, 2, 3, 4, 5];
// // debugger;
// numbers.push(6);
// debugger;

// #5 This

// const user = {
//   name: "Bob",
//   age: 23,
// };

// const user = new Object ()

// const numbers = [1, 2, 3, 4];
// const numbers = new Array()
// console.log(numbers);

// const name = "John";

// console.log(user);
// console.log(name.toLowerCase());

function showThis() {
  // this
  console.log(this); // window
}

const arrow = () => {
  // this - відсутній
  console.log(this); // window
};

// const user = {
//   name: "Bob",
//   age: 24,
//   showThis() {
//     console.log(this);
//   },
//   arrow: () => {
//     console.log(this);
//   },
// };

// const user = {
//   name: "Bob",
//   age: 24,
//   showThis() {
//     // this = user
//     console.log(this); // user
//     const arrow = () => {
//       console.log(this);
//     };
//     arrow();
//   },
// };

// showThis();
// arrow();

// user.showThis(); // user
// user.arrow(); // window

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName); // 0 або > 0

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// const numbers = [1, 2, 3, 4, 5];

// console.log(
//   numbers.map(function (number) {
//     return number - 10;
//   })
// );

// console.log(numbers.map((number) => number * 2));

// console.log(numbers.map((number) => number + 3));

// ("use strict");

// console.log(window);

// const arr = ["one", "two", "three"];
// arr.forEach((el) => {
//   console.log("this", this[el]);
//   // {
//   //   one, two, three;
//   // }
//   return (this[el] = (a) => console.log(a));
// });
// one("abc");

// power(5, 3);
// function power(base, exponent) {
//   // base = 5, exponent = 3
//   if (exponent == 0)
//     // nope, exponent != 0
//     return 1;
//   else return base * power(base, exponent - 1); // return 5 * power(5, 2)
// }

// 3 === 0 // false
// 5 * power(5,2) // 5 * 25 => 125
// 2 === 0 // false
// 5 * power(5,1) // 5 * 5 => 25
// 1 === 0 // false
// 5 * power(5,0) // 5 * 1 => 5
// 0 === 0 // true / 1

// const numbers = [1, 2, 3, 4, 5];

// const numbers = undefined;

// if (numbers) {
//   console.log(numbers.map((el) => el * 2));
// }

// console.log(numbers?.map((el) => el * 2));

// const adventurer = {
//   name: "Alice",
//   cat: {
//     name: "Dinah",
//   },
// };

// const dogName = adventurer.dog?.name;

// console.log(dogName);
