import Swiper, {Pagination, Navigation, Grid} from 'swiper'

const swiperCatalog = new Swiper('.catalog__slider', {
  modules: [Pagination, Navigation, Grid],

  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 3,
  },

  spaceBetween: 32,

  pagination: {
    el: ".catalog__slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  a11y: true,
})
