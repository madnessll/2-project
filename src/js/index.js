document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".mobile-menu").classList.toggle("open");
  document.querySelector(".header__logo").classList.toggle("hidden");
  document.querySelector("main").classList.toggle("hidden");
  document.querySelector("footer").classList.toggle("hidden");
});

// ////////////////////////////////////////////////////////////////

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // slidesPerView: 2,
  slidesPerView: 1,
  // spaceBetween: 38,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1100: {
      slidesPerView: 2,
      spaceBetween: 38,
    },
  },
});
// //////////////////////////////////////////////////
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.border = "none";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "grid";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.border = "none";

  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  target.style.removeProperty("border");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.style.removeProperty("border");
  }, duration);
};

function accordion() {
  const items = document.querySelectorAll(".questions__acordion-item");
  const triggers = document.querySelectorAll(".questions__acordion-trigger");
  const contents = document.querySelectorAll(".questions__acordion-content");

  triggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentNode

      if (!parent.classList.contains('active')) {
        parent.classList.add('active')
        slideDown(contents[idx])
      } else {
        parent.classList.remove('active')
        slideUp(contents[idx])
      }
    })
  }
)
}

accordion();
