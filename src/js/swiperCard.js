const swiper = new Swiper('.mySwiper', {
  effect: 'cards',
  cardsEffect: {
    perSlideRotate: 0,
    perSlideOffset: 20,
    slideShadows: false,
    rotate: false,
  },
  grabCursor: true,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    1200: {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 20,
      cardsEffect: {
        perSlideOffset: 30,
      },
    },

    1201: {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 0,
      cardsEffect: {
        perSlideOffset: 20,
      },
    },
  },
});

swiper.update();
