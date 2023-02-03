import Swiper, {Navigation} from 'swiper'

const swiperLikeProducts = new Swiper('.like-products__slider', {
  modules: [Navigation],

  effect: 'fade',
  spaceBetween: 32,
  slidesPerView: "auto",

  navigation: {
    prevEl: ".like-products__navigation-prev",
    nextEl: ".like-products__navigation-next",
  },

  autoplayDisableOnInteraction: false,
  direction: 'horizontal',

  a11y: true,
})

const buyButton = document.querySelector('#productBuyOneClick')
const productDialog = document.querySelector('#productDialog')
const productAccept = document.querySelector('#productAccept')

const modalWindows = document.querySelectorAll('.modal-window')
const closeModalButtons = document.querySelectorAll('.modal-window__content-btn-close')

closeModalButtons.forEach(item => {
  item.addEventListener('click', e => {
    modalWindows.forEach(modal => {
      modal.classList.remove("modal-window--visible")
    })
  })
})

buyButton.addEventListener('click', () => {
  productDialog.classList.add("modal-window--visible")
})

productDialog.onsubmit = () => {
  productDialog.classList.remove("modal-window--visible")
  productAccept.classList.add("modal-window--visible")
}
