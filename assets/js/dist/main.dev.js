"use strict";

new Swiper(".swiper-container", {
  grabCursor: true,
  //   hashNavigation: {
  //     watchState: true,
  //   },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper-container"
  },
  slidesPerView: 3,
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1432: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  } //   loop: true,

});