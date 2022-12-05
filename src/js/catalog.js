import Swiper, {Navigation} from 'swiper'

const swiperCatalog = new Swiper('.catalog__slider', {
  modules: [Navigation],

  // effect: 'fade',
  // slidesPerView: 3,
  // grid: {
  //   rows: 3,
  // },
  slidesPerView: 3,
  slidesPerColumn: 3,
  slidesPerGroup :3,

  spaceBetween: 32,

  // navigation: {
  //   prevEl: '.useful__navigation-prev',
  //   nextEl: '.useful__navigation-next',
  // },
  // autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  a11y: true,
})
