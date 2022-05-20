// thorotle
// debounce
// const name = "Bob";
// debugger;
// const age = 13;
// debugger;
// const user = {
//   name: "Jack",
// };

// for (let i = 0; i < 5; i += 1) {
//   debugger;
//   console.log(i);
// }

// const scrollHandler = () => {
//   console.log("scroll");
// };

// addEventListener("scroll", _.throttle(scrollHandler, 300));

// 1200 /300 = 4

// addEventListener("scroll", scrollHandler, 300);

// addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     console.log("close modal");
//   }
//   console.log(e);
// });

// const videoPlayer = document.querySelector("video");

// const handleVideoObserver = () => {
//   if (!videoPlayer.paused) {
//     videoPlayer.pause();
//   } else {
//     videoPlayer.play();
//   }
// };

// const watcher = new IntersectionObserver(handleVideoObserver, {
//   threshold: 0.5,
// });

// watcher.observe(videoPlayer);

// TODO

// 1) Створимо список на основі готового масиву
// 2) Додамо форму на екран і будемо доповнювати масив новими елементами

const productList = [
  {
    id: 1,
    text: "Молоко",
  },
  {
    id: 2,
    text: "Яблука",
  },
  {
    id: 3,
    text: "Полуниця",
  },
  {
    id: 4,
    text: "Хліб житній",
  },
  {
    id: 5,
    text: "Мясо",
  },
];

// const renderList = (products) => {
//   const result = products
//     .map((product) => `<li id="${product.id}">${product.text}</li>`)
//     .join("");
//   return result;
// };

// const renderList = (products) =>
//   products.map(({ id, text }) => `<li id="${id}">${text}</li>`).join("");

const form = document.querySelector(".form");
const input = document.querySelector(".input");

const createLi = (id, text) => `<li id="${id}">${text}</li>`;

const renderList = (products) =>
  products.reduce((acc, { id, text }) => acc + createLi(id, text), "");

const insertListItems = (string) => {
  const ul = document.querySelector(".list");
  ul.insertAdjacentHTML("beforeend", string);
};

// insertListItems(renderList(productList));
const result = renderList(productList);
insertListItems(result);

const submitHandler = (e) => {
  e.preventDefault();
  productList.push({ text: input.value, id: productList.length });
  insertListItems(createLi(input.value.length, input.value));
  input.value = "";
};

form.addEventListener("submit", submitHandler);

// шаблонний рядок зі всіма li відразу
