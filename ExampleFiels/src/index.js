import { refs } from "./scripts/refs";
import { createLi, addLiToList } from "./scripts/generateMarkdown";
import { storage } from "./helpers/storage";

const handleMount = () => {
  //   const list = localStorage.getItem("list");
  //   try {
  //     const savedList = JSON.parse(list);
  //     const markdown = savedList.reduce((acc, text) => acc + createLi(text), "");
  //     addLiToList(markdown);
  //   } catch (error) {
  //     console.log("Parsing error");
  //   }

  const list = storage.readItem("list", []);
  const markdown = list.reduce((acc, text) => acc + createLi(text), "");
  addLiToList(markdown);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const value = refs.input.value;
  const liItem = createLi(value);
  addLiToList(liItem);
  const result = storage.readItem("list", []);
  result.push(value);
  storage.addItem("list", result);

  //   const list = localStorage.getItem("list");
  //   try {
  //     const listData = list ? JSON.parse(list) : [];
  //     listData.push(value);
  //     const updatedList = JSON.stringify(listData);
  //     localStorage.setItem("list", updatedList);
  //   } catch (error) {
  //     console.log("parsing error");
  //   }

  //   const list = localStorage.getItem("list");
  //   let listData;

  //   if (list) {
  //     // try {
  //     //   listData = JSON.parse(list);
  //     // } catch (error) {
  //     //   console.log("parsing error");
  //     // }
  //     listData = JSON.parse(list);
  //   } else {
  //     listData = [];
  //   }
  //   listData.push(value);
  //   const updatedList = JSON.stringify(listData);
  //   localStorage.setItem("list", updatedList);

  refs.input.value = "";
};

refs.form.addEventListener("submit", handleSubmit);
addEventListener("DOMContentLoaded", handleMount);

// storage => ['test']
// 1) Прочитати сторедж
// 2) Перетворити в масив з JSON
// 3) Запушити в масив нові данні
// 4) Конвертувати новий масив в JSON
// 5) Записати новий JSON в сторедж
