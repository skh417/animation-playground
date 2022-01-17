"use strict";

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 250) {
    const mainText = document.querySelector(".main-text");

    mainText.style.animation = "slide-out 1.5s ease-out forwards";
  } else {
    const mainText = document.querySelector(".main-text");
    mainText.style.animation = "slide-in 1.5s ease-out forwards";
  }
});
