// // 1) кілька тегів li
// // 2) кілька тегів img

// const refs = {
//   list: document.querySelector(".list"),
//   containers: document.querySelectorAll(".container"),
// };

// console.log(refs.containers);

// const createListItem = (text) => {
//   console.log(this);
//   // 1) Створюємо DOM елемент
//   const li = document.createElement("li"); // li
//   // 2) Наповнюємо DOM елемент текстом
//   li.textContent = text;
//   // 3) Вставляємо DOM елемент на екран
//   refs.list.append(li);
// };

// const technologies = ["HTML", "CSS", "JS", "React", "Node"];

// technologies.forEach((technology) => createListItem(technology));
// // 1 technology = HTML
// // createListItem('HTML')
// // <li>HTML</li>

// // 2
// // technology = CSS
// // createListItem('CSS')
// // <li>CSS</li>

// const pList = [...document.querySelectorAll("p")];
// console.log(pList.map((p) => p.textContent));

// const span = document.querySelector("span");
// span.style.fontSize = "25px";

// const greet = document.querySelector("#greet");

// const wrapper = document.querySelector(".wrapper");

// const createHeader = () => {
//   return `
//     <header class='header'>
//         <h1>Trainerz</h1>
//         <div class='actions'>
//             <button>Google</button>
//             <button>App Store</button>
//         </div>
//     </header>
//     `;
// };

// const createHeroSection = () => {
//   return `
//       <section class="hero">
//         <h2 class="hero__title">Start to
// workout</h2>
//         <p class="hero__text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
//         <button class="cta">CcccccccTA</button>
//         <img src="./images/hero.jpeg" alt="training" class="hero__workout">
//     </section>
//     `;
// };

// wrapper.insertAdjacentHTML("afterbegin", createHeader());
// wrapper.insertAdjacentHTML("beforeend", createHeroSection());

class SiteConstructor {
  constructor() {
    this.wrapper = document.querySelector(".wrapper");
  }

  createHeader = () => {
    return `
    <header class='header'>
        <h1>Trainerz</h1>
        <div class='actions'>
            <button>Google</button>
            <button>App Store</button>
        </div>
    </header>
    `;
  };

  createHeroSection = () => {
    return `
      <section class="hero">
        <h2 class="hero__title">Start to
workout</h2>
        <p class="hero__text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <button class="cta">CcccccccTA</button>
        <img src="./images/hero.jpeg" alt="training" class="hero__workout">
    </section>
    `;
  };

  render = () => {
    this.wrapper.insertAdjacentHTML("afterbegin", this.createHeader());
    this.wrapper.insertAdjacentHTML("beforeend", this.createHeroSection());
  };
}

const site = new SiteConstructor();

// site.render();

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     if (!this.items.includes(item)) return "товар відсутній на складі";
//     // this.items = this.items.filter((items) => items !== item);
//     // const index = this.items.indexOf(item);
//     // this.items.splice(index, 1);
//     this.items = this.items.filter(
//       (items, index, array) => array.indexOf(items) === index
//     );
//   }
// }

// // ```js
// const storage = new Storage(["apple", "lemon", "bananas", "grape"]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("kiwi");
// storage.addItem("lemon");
// console.table(storage.items);
// storage.removeItem("lemon");
// console.table(storage.items);

// const btn = document.querySelector("#btn");

// function clickHandler(e, text) {
//   console.log(text);
//   console.log("event", e);
// }

// function clickWrapperHandler(e) {
//   clickHandler(e, "Hello");
// }

// btn.addEventListener("click", clickWrapperHandler);

// const input = document.querySelector("input");
// const form = document.querySelector("form");

// function submitHandler(e) {
//   e.preventDefault();
//   const inputValue = input.value;
//   console.log("inputValue", inputValue);
// }

// form.addEventListener("submit", submitHandler);

// const form = document.querySelector("form");

// function submitHandler(e) {
//   e.preventDefault();
//   const isValidForm = [...e.target.elements]
//     .filter((el) => el.tagName === "INPUT")
//     .some((el) => el.value === "");

//   if (isValidForm) {
//     alert("Заповніть форму");
//   }
// }

// form.addEventListener("submit", submitHandler);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("event.currentTarget", event.currentTarget);
//   // event.currentTarget - form
//   // event.currentTarget.elements - input X2 та кнопка {login, password}
//   // console.log(event);
//   // // console.log("event", event.target);
//   // const {
//   //   elements: { username, password },
//   // } = event.currentTarget;
//   // const { elements } = event.currentTarget;
//   // const { login, password } = elements;
//   // console.log(event.currentTarget.elements);
//   // console.log();

//   // const { login, passord } = event.target.elements;
// });

// target
// current target

// Теж не розумію, що тут відбувається
// const {
//   elements: { username, password },
// } = event.currentTarget;
// form.addEventListener()

// function addEventListener(eventType, cb) {
//   if (e.type === eventType) {
//     cb(e)
//   }
// }

/// modal window

// const createModal = () => {
//   return ` <div class="overlay hide">
//         <div class="modal">
//             <h2 class="title"></h2>
//             <button class="close">Close</button>
//         </div>
//     </div>`;
// };
// const wrapper = document.querySelector(".wrapper");
// wrapper.insertAdjacentHTML("beforeend", createModal());

// const refs = {
//   openModal: document.querySelector("#modal-btn"),
//   closeModal: document.querySelector(".close"),
//   overlay: document.querySelector(".overlay"),
// };

// function toggleModalHandler() {
//   refs.overlay.classList.toggle("hide");
// }

// refs.openModal.addEventListener("click", toggleModalHandler);
// refs.closeModal.addEventListener("click", toggleModalHandler);

const refs = {
  priceInput: document.querySelector("#price"),
  quantityInput: document.querySelector("#quantity"),
  total: document.querySelector(".total"),
  form: document.querySelector(".form"),
  amount: document.querySelector(".amount"),
};

function calculate() {
  const result = refs.priceInput.value * refs.quantityInput.value; // refs.quantityInput.value => 3
  refs.total.textContent = `${result.toFixed(2)} грн`;
  refs.amount.textContent = refs.quantityInput.value;
}

refs.form.addEventListener("input", calculate);

document.addEventListener("DOMContentLoaded", calculate);
