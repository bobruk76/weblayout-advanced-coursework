import Swiper, {Pagination, Navigation, Grid} from 'swiper'

const swiperCatalog = new Swiper('.catalog__slider', {
  modules: [Pagination, Navigation, Grid],

  effect: 'fade',

  slidesPerView: 3,
  grid: {
    rows: 3,
  },

  spaceBetween: 32,

  pagination: {
    el: ".catalog__slider-pagination",
    clickable: true,
  },

  a11y: true,
})
