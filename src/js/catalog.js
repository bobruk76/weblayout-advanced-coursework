import Swiper, {Navigation} from 'swiper'

const swiperCatalog = new Swiper('.catalog__slider', {
  modules: [Navigation],

  effect: 'fade',
  slidesPerView: 3,
  grid: {
    rows: 3,
    columns: 3,
  },
  spaceBetween: 32,
  slidesPerGroup: 9,
  // navigation: {
  //   prevEl: '.useful__navigation-prev',
  //   nextEl: '.useful__navigation-next',
  // },
  // autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  a11y: true,
})
