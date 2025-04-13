const swiper = new Swiper('.mySwiper', {
  effect: 'cards',
  grabCursor: true,
  direction: 'vertical',
  cardsEffect: {
    perSlideRotate: 0,
    perSlideOffset: 12,
    slideShadows: false,
  },
  slidesPerView: 1,
  breakpoints: {
    1200: {
      direction: 'horizontal',
      effect: 'cards',
      cardsEffect: {
        perSlideOffset: 12,
        perSlideRotate: 0,
        slideShadows: false,
      },
    },
  },
});

// const swiper2 = new Swiper('.mySwiper2', {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true,
//     clickable: true,
//   },
//   breakpoints: {
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 32,
//       pagination: {
//         el: null,
//       },
//     },
//   },
// });

let swiper2 = null;

function initSwiper2() {
  if (window.innerWidth <= 1200 && !swiper2) {
    swiper2 = new Swiper('.mySwiper2', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
    });
  }
}

function destroySwiper2() {
  if (swiper2) {
    swiper2.destroy(true, true);
    swiper2 = null;
  }
}

initSwiper2();

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1200) {
    initSwiper2();
  } else {
    destroySwiper2();
  }
});
