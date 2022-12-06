import Swiper, {Navigation} from 'swiper'

const swiperCatalog = new Swiper('.catalog__slider', {
  modules: [Navigation],

  effect: 'fade',
  slidesPerView: 3,
  // grid: {
  //   rows: 3,
  // },

  spaceBetween: 32,
  a11y: true,
})
