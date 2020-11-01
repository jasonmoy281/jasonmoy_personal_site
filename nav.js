const navIconMobile = document.querySelector(".nav-icon-mobile");
const navBar = document.querySelector(".nav-bar");
const navBarText = document.querySelectorAll(".nav-bar li");
const nav = document.querySelector("nav");

const navSlide = () => {
  navIconMobile.addEventListener("click", function () {
    navBar.classList.toggle("nav-bar-active");
    navBarText.remo;
    for (text of navBarText) {
      text.classList.toggle("nav-bar-text-active");
    }
  });
};

console.log(navBarText);
navSlide();
