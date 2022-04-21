// const numbers = [1, 2, 3, 4, 5, 6];

// const allCourses = ["JS", "HTML", "JS", "React"];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// 1
//course = 'JS'
// index = allCourses.indexOf('JS')
// 0 === 0 // true
// ['JS']

// 2
// course = "HTML"
// index = allCourses.indexOf('HTML')
// 1 === 1 // true
// ['JS', 'HTML']

// 3
// course = 'JS'
// index = allCourses.indexOf('JS')
// 0 === 2 // false
// ['JS', 'HTML']

// console.log(new Set(allCourses))

// console.log(uniqueCourses);

// function mult(element) {
//   console.log(element * 2);
// }

// function print(element) {
//   console.log(element);
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i] * 2);
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   mult(numbers[i]);
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   print(numbers[i]);
// }

// numbers.forEach(function (element) {
//   console.log(element * 2);
// });

// numbers.forEach(mult);

// const arrowMult = (element) => {
//   console.log(element * 2);
// };

// numbers.forEach((number, index, arr) => console.log(number > arr[index - 1]));

// numbers.forEach(arrowMult);

// console.log(numbers);

// # Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.
// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль
// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль

// ```js
// // Решение
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(price * quantity);
// }

// function createProduct(obj, cb) {
//   const product = { ...obj, id: Date.now() };
//   cb(product);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
// ```

// ## Example 2 - Коллбек функции

// Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
// `deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
// второй и третий - колбеки.

// Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
// this.balance, и onSuccess в противном случае.

// Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
// либо равен нулю, и onSuccess в противном случае.

// ```js
// // Решение

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onError, onSuccess) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError("Сума перевищує ліміт");
//       //   console.log("Сума перевищує ліміт");
//       return;
//     }
//     if (amount > this.balance) {
//       onError("Сума перевищує баланс на рахунку");
//       // console.log("Сума перевищує баланс на рахунку");
//       return;
//     }
//     this.balance -= amount;
//     onSuccess("Кошти зняті успішно");
//   },

//   deposit(amount, onError, onSuccess) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError("Сума перевищує ліміт");
//       //   console.log("Сума перевищує ліміт");
//       return;
//     }
//     if (amount < 0) {
//       onError("Сума меньша нуля");
//       //   console.log("Сума перевищує ліміт");
//       return;
//     }

//     if (amount === 0) {
//       onError("Ви ввели не коректну суму");
//       //   console.log("Сума перевищує ліміт");
//       return;
//     }
//     this.balance += amount;
//     onSuccess("Баланс поповнено успішно");
//   },
// };

// function createErrorMessage(message) {
//   console.log(`${message} - error`);
// }

// function createSuccessMessage(message) {
//   console.log(`${message} - ok`);
// }

// account.withdraw(2000, createErrorMessage);
// account.withdraw(600, createErrorMessage);
// account.withdraw(300, createErrorMessage, createSuccessMessage);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

//  if (amount > TRANSACTION_LIMIT) {
//    onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//  } else if (amount <= 0) {
//    onError(`Amount must be more than 0 credits`);
//  } else {
//    this.balance += amount;
//    onSuccess(`Account balance: ${this.balance}`);
//  }

//  if (amount > TRANSACTION_LIMIT) {
//    onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//  } else if (amount > this.balance) {
//    onError(`Amount can't exceed account balance of ${this.balance} credits`);
//  } else {
//    this.balance -= amount;
//    onSuccess(`Account balance: ${this.balance}`);
//  }

// ## Example 3 - Коллбек функции

// Напишите функцию `each(array, callback)`, которая первым параметром ожидает
// массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты
// вызова коллбека.

// function each(array, cb) {
//   const result = [];
//   for (let element of array) {
//     result.push(cb(element));
//   }
//   return result;
// }

// const each = (array, cb) => {
//   const result = [];
//   for (let element of array) {
//     result.push(cb(element));
//   }
//   return result;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], (value) => {
//     return value * 2;
//   })
// );

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return Math.sqrt(value);
// //   })
// // );

// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value))); //25.8 => 26 25.001 => 26

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));
// ```

// ## Example 4 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// ```

// ## Example 5 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 6 - Инлайн стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
// ```

// ## Example 7 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// function logItems(items) {
//   items.forEach(function (item, index) {
//     console.log(`${index + 1} - ${item}`);
//   });
// }

// function logItems(items) {
//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`));
// }

// const logItems = (items) =>
//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`));

// function logItems(items) {
//   items.forEach((item, index) => {
//     if (index % 2 === 0) {
//       console.log(`${index + 1} - ${item}`);
//     }
//   });
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// ```

// ## Example 8 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 9 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// // ```js
// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
// ```
////////////////////////
// lesson #8

// # Модуль 4. Занятие 8. Перебирающие методы массива

// ## Коллекция объектов для всех примеров с автомобилями

// ```js
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
// ];
// ```

// ## Example 1 - Метод map

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

// ```js
// const getModels = cars => {};

// console.table(getModels(cars));
// ```

// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// ```js
// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// ```

// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

// ```js
// const filterByPrice = (cars, threshold) => {};

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// ```

// ## Example 4 - Метод filter

// Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
// onSale которых true.

// ```js
// const getCarsWithDiscount = cars => {};

// console.table(getCarsWithDiscount(cars));
// ```

// ## Example 5 - Метод filter

// Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
// совпадает со значением параметра `type`.

// ```js
// const getCarsWithType = (cars, type) => {};

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// ```

// ## Example 6 - Метод find

// ```js
// const getCarByModel = (cars, model) => {};

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// ```

// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

// ```js
// const sortByAscendingAmount = cars => {};

// console.table(sortByAscendingAmount(cars));
// ```

// ## Example 8 - Метод sort

// Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
// отсортированный по убыванию значения свойства `price`.

// ```js
// const sortByDescendingPrice = cars => {};

// console.table(sortByDescendingPrice(cars));
// ```

// ## Example 9 - Метод sort

// Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
// значения параметра `order`.

// ```js
// const sortByModel = (cars, order) => {};

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// ```

// ## Example 10 - Метод reduce

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).

// ```js
// const getTotalAmount = cars => {};

// console.log(getTotalAmount(cars));
// ```

// ## Example 11 - Цепочки методов

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.

// ```js
// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));
// ```

// ## Example 12 - Цепочки методов

// Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
// (свойство onSale), отсортированных по возрастанию цены.

// ```js
// const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));
// ```
