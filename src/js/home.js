import JustValidate from 'just-validate'
import InputMask from "inputmask"
import Swiper, {Autoplay, Pagination, Navigation} from 'swiper'

const swiperHero = new Swiper('.hero__slider', {
  modules: [Autoplay, Pagination],
  effect: 'fade',
  spaceBetween: 100,
  pagination: {
    el: ".hero__slider-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false
  // },
  autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  loop: true,
  a11y: true,
})

const swiperOffers = new Swiper('.special-offers__slider', {
  modules: [Navigation],
  effect: 'fade',
  spaceBetween: 32,

  slidesPerView: 2,
  slidesPerGroup: 2,
  breakpoints: {
    1024: {
      slidesPerView: "auto",
      slidesPerGroup: 3,
    }
  },
  navigation: {
    prevEl: ".special-offers__navigation-prev",
    nextEl: ".special-offers__navigation-next",
  },
  autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  a11y: true,
})

const swiperUseful = new Swiper('.useful__slider', {
  modules: [Navigation],
  effect: 'fade',
  spaceBetween: 32,
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  },
  navigation: {
    prevEl: ".useful__navigation-prev",
    nextEl: ".useful__navigation-next",
  },
  autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  a11y: true,
})

// contacts__form masks and validate
const phones = document.querySelectorAll('input[type=tel]')
phones.forEach(phone => {
  InputMask("+9(999)999-99-99").mask(phone);
})

const validationContacts = new JustValidate(
  '.contacts__form',
  {
    errorLabelStyle: null,
    focusInvalidField: true,
    lockForm: true,
  },
)

validationContacts
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Zа-яА-Я]+(([',. -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      errorMessage: 'Недопустимый формат',
    }
  ])

  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели номер телефона',
    },
    {
      rule: 'customRegexp',
      value: /^[+]*[0-9][(][0-9]{3}[)][0-9]{3}[-][0-9]{2}[-][0-9]{2}/,
      errorMessage: 'Недопустимый формат',
    },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);
