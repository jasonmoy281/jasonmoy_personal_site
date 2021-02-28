const navIconMobile = document.querySelector(".nav-icon-mobile");
const navBar = document.querySelector(".nav-bar");
const navBarText = document.querySelectorAll(".nav-bar li");
const nav = document.querySelector("nav");
// const wechatIcon = document.querySelector(".wechat");
// const qrCode = document.querySelector(".qr-code");

const navSlide = () => {
  navIconMobile.addEventListener("click", function () {
    navBar.classList.toggle("nav-bar-active");
    for (text of navBarText) {
      text.classList.toggle("nav-bar-text-active");
    }
  });
};

// const qrCodeShow = () => {
//   wechatIcon.addEventListener("click", function () {
//     qrCode.classList.toggle("qr-code-active");
//   });
// };

navSlide();
// qrCodeShow();
