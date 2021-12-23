const container = document.querySelector(".thumbnail");
const thumb = document.querySelectorAll(".thumb");
const thumbBtn = document.querySelectorAll(".thumb-btn");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb-btn") {
    e.target.classList.add("active");
  }
});
