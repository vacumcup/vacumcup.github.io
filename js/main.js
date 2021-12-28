// product process
const modelBtn = document.querySelector(".thumbnail .item.model");
const colorBtn = document.querySelector(".thumbnail .item.color");
const highlightsBtn = document.querySelector(".thumbnail .item.highlights");
const shadowBtn = document.querySelector(".thumbnail .item.shadow");
const detailsBtn = document.querySelector(".thumbnail .item.details");

const thumbImg = document.querySelector(".thumbnail .gallery img");

modelBtn.addEventListener("click", () => {
  console.log(modelBtn);
  thumbImg.src = "./img/process/process1.png";
});
colorBtn.addEventListener("click", () => {
  console.log(colorBtn);
  thumbImg.src = "./img/process/process2.png";
});
highlightsBtn.addEventListener("click", () => {
  console.log(highlightsBtn);
  thumbImg.src = "./img/process/process3.png";
});
shadowBtn.addEventListener("click", () => {
  console.log(shadowBtn);
  thumbImg.src = "./img/process/process4.png";
});
detailsBtn.addEventListener("click", () => {
  console.log(detailsBtn);
  thumbImg.src = "./img/process/process5.png";
});

// product view
const oriBtn = document.querySelector(".ori-btn");
const duoBtn = document.querySelector(".duo-btn");
const viewImg = document.querySelector(".view img");

var imageLinks = [
  { link: "./img/view/view-original.png" },
  { link: "./img/view/view-duo.png" },
];

oriBtn.addEventListener("click", () => {
  console.log("original");
  viewImg.src = "./img/view/view-original.png";
});

duoBtn.addEventListener("click", () => {
  console.log("duo");
  viewImg.src = "./img/view/view-duo.png";
});
