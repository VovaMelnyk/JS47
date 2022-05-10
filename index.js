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

site.render();

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    if (!this.items.includes(item)) return "товар відсутній на складі";
    // this.items = this.items.filter((items) => items !== item);
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

// ```js
const storage = new Storage(["apple", "lemon", "bananas", "grape"]);

const items = storage.getItems();
console.table(items);

storage.addItem("kiwi");
storage.addItem("lemon");
console.table(storage.items);
storage.removeItem("lemon");
console.table(storage.items);
