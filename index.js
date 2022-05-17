// 1) Опрацювати аналог ховера через JS
// 2) Змінити координати кнопки
// 3) Змінити координати рандомно
// 4) Кнопки не мають виходити за межі екрану
// 5) Використати делегування подій

// const container = document.querySelector(".container");

// const hoverHandler = (e) => {
//   const { target: button } = e;
//   button.style.top = `${Math.floor(
//     Math.random() * (window.innerHeight - button.clientHeight)
//   )}px`;
//   button.style.left = `${Math.floor(
//     Math.random() * (window.innerWidth - button.clientWidth)
//   )}px`;
// };

// container.addEventListener("mouseover", hoverHandler);

// const main = document.querySelector("main");

// main.addEventListener("click", (e) => {
//   const { target } = e;
//   // const target = e.target;
//   if (target.dataset.modal) {
//     console.log("click");
//   }
// });
// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
// instance.show();

Fancybox.bind('[data-fancybox="gallery"]', {
  infinite: false,
  closeButton: "inside",
});
