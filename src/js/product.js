import Swiper, {Navigation} from 'swiper'

const swiperLikeProducts = new Swiper('.like-products__slider', {
  modules: [Navigation],

  effect: 'fade',
  slidesPerView: "auto",
  slidesPerGroup: 3,

  navigation: {
    prevEl: ".like-products__navigation-prev",
    nextEl: ".like-products__navigation-next",
  },

  autoplayDisableOnInteraction: false,
  direction: 'horizontal',

  a11y: true,
})
