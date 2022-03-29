// let name = "Bob";
// let age;

// const a = 5;
// const b = "5";

// console.log(a == b); // true
// визначає тип порівгня
// a - тип number
// b - тип string
// конвертує змінну b в число
// і порівнює змінні a і b
// console.log(a === b); // false

// console.log(0.1 + 0.2); // 0.30000000000000004
// clg(2.1 + 3.2 == 5.3); // true

// 0
// false
// null
// undefined
// NaN
// ""
//-0

// const valueB = "Strrng";
// console.log(Number(valueB)); // NaN
// console.log(typeof NaN); // number

// # Модуль 1. Занятие 1. Переменные, типы и операторы

// ## Example 1 - Базовые математические операторы

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// ```js
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log("сума", total);
// const diff = apples - grapes;
// console.log("різниця", diff);
// ```

// ## Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором `+=`.

// ```js
// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);
// 1) в students записано 100
// 2) до цифри 100 додаємо 50
// 3) в students записано 150
// Copilot
// ```

// ## Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// ```js
// const result = (108 + 223) - 2 * 5;
// console.log(result);
// ```

// ## Example 4 - Класс Math

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// ```js
// const value = 27.7;
// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(value)); // 28

// ```

// ## Example 5 - Шаблонные строки

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// ```js
// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// // ```

// ## Example 6 - Методы строк и чейнинг

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
// необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
// виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
// `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
// запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// ```js
let weight = "88,3"; // 8 => 0 // 8 => 1 // ,=> 2 // 3 => 3
let height = "1.75";

// let convertedWeight = parseFloat(weight);
// let convertedHeight = parseFloat(height);

// console.log(convertedWeight);
// console.log(convertedHeight);

// const bmi = convertedWeight / Math.pow(convertedHeight, 2);
// console.log(bmi); // 28.8

// 1) потрібно знайти порядковий номер коми в рядочкус (indexOf)
// 2) відділити число від коми (slice)
// 3) отримати значення після коми (slice)
// 4) потрібно зробити парвильне дробове значення (template string)
// 5) можемо користуватися результатом

// const index = weight.indexOf(",");
// const weightWithoutComma = weight.slice(0, index);
// const weightAfterComma = weight.slice(index + 1); // 2 + 1
// const newWeight = `${weightWithoutComma}.${weightAfterComma}`;
// console.log(newWeight);
// const bmi = newWeight / Math.pow(height, 2);

// console.log(bmi);

// let convertWeight = Number(weight);
// let convertHeight = Number(height);

// console.log(convertWeight);
// console.log(convertHeight);

// ```

// ## Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// ```js
// console.log(5 > 4);

// console.log(10 >= '7');
// 1) конвертує в число строку "7"
// 1.1) Number("7") => 7
// 2) порівнює числа між собою

// console.log("2" > "12");

// const a = "1";
// const b = 2;

// console.log("Bob" > "Alice");
// console.log('B' > 'A');
// console.log("A" > "B");


// "Bob".charCodeAt(1); // 50
// "Blice".charCodeAt(1); // 49

// console.log(50 > 49);

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true); // 1 == 1

// console.log(1 === true);

// console.log('0' == false); // 0 == 0

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// ```

// ## Example 8 - Логические операторы

// Каким будет результат выражений?

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// ## Example 9 - Значение по умолчанию и оператор нулевого слияния

// Отрефактори код так, чтобы в переменную `value` присваивалось значение
// переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// противном случае должно присваиваться значение `defaultValue`. Проверь работу
// скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// false. Используй оператор `??` (nullish coalescing operator).

// ```js
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);
// ```

// ## Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```
