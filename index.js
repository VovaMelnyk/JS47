// // const a = [1, 2, 3]; // array link#1
// // // const result = a.push(4, 5, 6, 7); // array link#2
// // const result = a.pop();
// // console.log(result); // 7
// // const b = [1, 2, 3];// array link#2

// // console.log(a === b); // false

// // # Модуль 2. Занятие 3. Массивы

// // ## Example 1 - Базовые операции с массивом

// // 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// // 2. Добавьте «Рок-н-ролл» в конец.
// // 3. Выведите в консоль первый элемент массива.
// // 4. Выведите в консоль последний элемент массива. Код должен работать для массива
// //    произвольной длины.
// // 5. Удалите первый элемент и выведите его в консоль.
// // 6. Вставьте «Country» и «Reggy» в начало массива.

// // ```js
// // const genres = ["Jazz", "Blues"];
// // genres.push("Рок-н-ролл");
// // console.log(genres[0]);
// // console.log(genres[genres.length - 1]); // length = 10 lastIndex = 9
// // console.log(genres.shift());
// // console.log(genres.unshift("Country", "Reggy"));
// // console.log(genres);
// // ```

// // ## Example 2 - Массивы и строки

// // Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// // которых хранятся в переменной `values` в виде строки. Значения гарантированно
// // разделены пробелом.

// // ```js
// // const values = "10 10";
// // const numbers = values.split(" ");
// // // const result = numbers[0] * numbers[1];
// // const result = Number(numbers[0]) + Number(numbers[1]);

// // console.log(result);

// // const a = 5;
// // const b = "10";

// // console.log(a);
// // console.log(b);
// // ```

// // ## Example 3 - Перебор массива

// // Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// // массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// // Нумерация элементов должна начинаться с `1`.

// // ```js
// // const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// // ```

// // for (let i = 0; i < fruits.length; i += 1) {
// //   const index = i + 1;
// //   const element = fruits[i];
// //   console.log(`${index}: ${element}`);
// // }

// // for (let element of fruits) {
// //   const index = fruits.indexOf(element) + 1;
// //   console.log(`${index}: ${element}`);
// // }

// // ## Example 4 - Массивы и циклы

// // Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В
// // переменных `names` и `phones` хранятся строки имен и телефонных номеров,
// // разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на
// // соответствие. Количество имен и телефонов гарантированно одинаковое.

// // Опрацювати варіант коли довжина строк різна

// // ```js
// // const names = "Jacob,William,Solomon,Artemis";
// // const names = "Jacob,William,Solomon";

// // const phones = "89001234567,89001112233,890055566377,890055566300";

// // const names = "Jacob,William,Solomon,Artemis";

// // const phones = "89001234567,89001112233,890055566377";
// // ```

// // const namesArray = names.split(",");
// // const phonesArray = phones.split(",");

// // console.log(namesArray);
// // console.log(phonesArray);

// // // let longestArray = [];

// // // if (namesArray.length > phonesArray.length) {
// // //   longestArray = namesArray;
// // // } else {
// // //   longestArray = phonesArray;
// // // }

// // const longestArray = namesArray.length > phonesArray.length ? namesArray : phonesArray;

// // for (let i = 0; i < longestArray.length; i += 1) {
// //   const name = namesArray[i] === undefined ? "empty" : namesArray[i];
// //   // iteration #1
// //   // i = 0
// //   // const name = namesArray[0]
// //   // const name = 'Jacob' === undefined // false
// //   // const name = namesArray[0] // Jacob;

// //   // Iteration #4
// //   // i = 3
// //   // const name = namesArray[3]
// //   // const name = undefined === undefined // true
// //   //   const name = 'empty'
// //   const phone = phonesArray[i] === undefined ? "empty" : phonesArray[i];
// //   console.log(`${name} - ${phone}`);
// // }

// // for (let i = 0; i < longestArray.length; i += 1) {
// //   console.log(
// //     `${namesArray[i] === undefined ? "empty" : namesArray[i]} - ${
// //       phonesArray[i] === undefined ? "empty" : phonesArray[i]
// //     }`
// //   );
// // }

// // ## Example 5 - Массивы и строки

// // Напиши скрипт который выводит в консоль все слова строки кроме первого и
// // последнего. Результирующая строка не должна начинаться или заканчиваться
// // пробельным символом. Скрипт должен работать для любой строки.

// // ```js
// // const string = "Welcome to the future";
// // const array = string.split(" ");

// // shift, pop
// // const copyArray = array.slice();
// // copyArray.pop();
// // copyArray.shift();
// // const result = copyArray.join(" ");
// // console.log("original", array);
// // console.log("copy", copyArray);
// // console.log(result);

// //splice
// // const copyArray = array.slice();
// // const copyArray = [].concat(array);
// // copyArray.splice(0, 1);
// // copyArray.splice(copyArray.length - 1, 1);
// // const result = copyArray.join(" ");
// // console.log("original", array);
// // console.log("copy", copyArray);
// // console.log(result);
// // ```

// // ## Example 6 - Массивы и строки

// // Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// // ее в консоль.

// // ```js
// // const string = 'Welcome to the future';
// // ```

// // ## Example 7 - Сортировка массива с циклом

// // Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве
// // элемента.

// // ```js
// // const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// // ```

// // ## Example 8 - Поиск элемента

// // Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// // любого массива чисел. Используй цикл для решения задачи.

// // ```js
// // const numbers = [2, 17, 94, 1, 23, 37];
// // let min;
// // console.log(min); // 1
// // ```

// //////////////////////////
// // Lesson 4

// # Модуль 2. Занятие 4. Функции

// ## Example 2 - Меньшее из чисел

// Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

// ```js
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// ```

// ## Example 3 - Площадь прямоугольника

// Напиши функцию `getRectArea(dimensions)` для вычисления площади прямоугольника
// со сторонами, значения которых будут переданы в параметр `dimensions` в виде
// строки. Значения гарантированно разделены пробелом.

// ```js
// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));
// ```

// ## Example 4 - Логирование элементов

// Напиши функцию `logItems(items)`, которая получает массив и использует цикл
// `for`, который для каждого элемента массива будет выводить в консоль сообщение в
// формате `<номер элемента> - <значение элемента>`. Нумерация элементов должна
// начинаться с `1`.

// Например для первого элемента массива `['Mango', 'Poly', 'Ajax']` с индексом `0`
// будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.

// ```js
// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```


// ## Example 6 - Поиск наибольшего элемента

// Напиши функцию `findLargestNumber(numbers)`которая ищет самое большое число в
// массиве.

// ```js
// function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ```

// ## Example 7 - Среднее значение

// Напишите функцию `calAverage()` которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение. Все аругменты будут только числами.

// ```js
// function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ```

// ## Example 8 - Форматирование времени

// Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
// (количество минут) в строку в формате часов и минут `HH:MM`.

// ```js
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ```

// ## Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)

// Напишите функции для работы с коллекцией обучающих курсов `courses`:

// - `addCourse(name)` - добавляет курс в конец коллекции
// - `removeCourse(name)` - удаляет курс из коллекции
// - `updateCourse(oldName, newName)` - изменяет имя на новое

// ```js
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```

