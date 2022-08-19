"use strict";

const openBtn = document.querySelectorAll(".modalOpenbtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closebtn");
const overlay = document.querySelector(".overlay");

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", openmodal);
}

closeBtn.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", (es) => {
  if (es.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
