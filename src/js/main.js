import Choices from 'choices.js'
import Swiper, {Autoplay, Pagination} from 'swiper'
Swiper.use([Autoplay, Pagination])

const swiperHero = new Swiper('.hero__slider', {
  effect: 'fade',
  spaceBetween: 100,
  autoHeight: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false
  // },
  autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  loop: true,
  a11y: {
    paginationBulletMessage: 'Слайд с главной картинкой {{index}}',
  }
})

const swiperOffers = new Swiper('.special-offers__slider', {
  effect: 'fade',
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  autoHeight: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  loop: true,
  a11y: {
    paginationBulletMessage: 'Слайд со специальными предложениями{{index}}',
  }
})


const swiperUseful = new Swiper('.useful__slider', {
  effect: 'fade',
  slidesPerView: 2,
  spaceBetween: 32,
  slidesPerGroup: 2,
  autoHeight: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  autoplayDisableOnInteraction: false,
  direction: 'horizontal',
  loop: true,
  a11y: {
    paginationBulletMessage: 'Слайд с полезными предложениями{{index}}',
  }
})

const headerSelect = document.querySelector('#header_select');
const headerChoices = new Choices(headerSelect, {
  itemSelectText: '',
  placeholder: false,
  allowHTML: true,
  choices: [
    {
      value: 'Москва',
      label: 'Москва',
      selected: true,
      disabled: false,
    },
    {
      value: 'Казань',
      label: 'Казань',
      selected: false,
      disabled: false,
    },
    {
      value: 'Уфа',
      label: 'Уфа',
      selected: false,
      disabled: false,
    },
    {
      value: 'Пермь',
      label: 'Пермь',
      selected: false,
      disabled: false,
    },
  ],
  searchEnabled: false,
  shouldSort: false,
});

const categorySelect = document.querySelector('#category');
const categoryChoices = new Choices(categorySelect, {
  itemSelectText: '',
  placeholder: false,
  allowHTML: true,
  searchEnabled: true,
  shouldSort: false,
  choices: [
    {
      value: 'Категория',
      label: 'Категория',
      id: 0,
      selected: true,
      disabled: true,
    },
    {
      value: 'Диваны',
      label: 'Диваны',
      id: 1,
      selected: false,
      disabled: false,
    },
    {
      value: 'Кресла',
      label: 'Кресла',
      id: 2,
      selected: false,
      disabled: false,
    },
    {
      value: 'Пуфы',
      label: 'Пуфы',
      id: 3,
      selected: false,
      disabled: false,
    },
    {
      value: 'Кровати',
      label: 'Кровати',
      id: 4,
      selected: false,
      disabled: false,
    },
    {
      value: 'Тумбы',
      label: 'Тумбы',
      id: 5,
      selected: false,
      disabled: false,
    },
    {
      value: 'Комоды',
      label: 'Комоды',
      id: 6,
      selected: false,
      disabled: false,
    },
    {
      value: 'Стулья',
      label: 'Стулья',
      id: 7,
    },
    {
      value: 'Столы',
      label: 'Столы',
      id: 8,
      selected: false,
      disabled: false,
    },
    {
      value: 'Аксессуары',
      label: 'Аксессуары',
      id: 9,
      selected: false,
      disabled: false,
    },
  ],
});


// const searchButton = document.querySelector('.header__search-btn')
// const headerInput = document.querySelector('.header__input')
//
//
// searchButton.addEventListener('click', () => {
//   if (!headerInput.classList.contains('header__input--visible')) {
//     headerInput.classList.add('header__input--visible')
//   }
//
// })
//
//
// // about-us__form-subscribe validate
// const validationSubscribe = new JustValidate(
//     '.about-us__form-subscribe',
//     {
//       errorLabelStyle: null,
//     },
//   )
// ;
//
// validationSubscribe
//   .addField('#email-subscribe', [
//     {
//       rule: 'required',
//       errorMessage: 'Вы не ввели e-mail',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Недопустимый формат',
//     },
//   ]);
//
//
// const validationContacts = new JustValidate(
//     '.contacts__form',
//     {
//       errorLabelStyle: null,
//     },
//   )
// ;
//
// validationContacts
//   .addField('#message', [
//     {
//       rule: 'required',
//       errorMessage: 'Вы не ввели сообщение',
//     },
//   ])
//   .addField('#name', [
//     {
//       rule: 'required',
//       errorMessage: 'Вы не ввели имя',
//     },
//     {
//       rule: 'customRegexp',
//       value: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
//       errorMessage: 'Недопустимый формат',
//     },
//
//   ])
//   .addField('#email', [
//     {
//       rule: 'required',
//       errorMessage: 'Вы не ввели e-mail',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Недопустимый формат',
//     },
//   ]);
//
// const headerItemsHide = document.querySelectorAll('.header__item-bottom, .header__item-close');
//
// ["resize", "load"].forEach(ev => {
//   window.addEventListener(ev, () => {
//     headerItemsHide.forEach(Item => {
//       if (window.screen.width > 576) {
//         Item.classList.add('visually-hidden')
//         myMap.setCenter?.([55.75630609735012, 37.60695484283449])
//       } else {
//         Item.classList.remove('visually-hidden')
//         myMap.setCenter?.([55.75566075845455, 37.62137440111788])
//       }
//     })
//   })
// })
//
// // burger
// const headerBurger = document.querySelector('.header__nav-burger')
// const headerItems = document.querySelector('.header__items')
// const headerItemCloseBtn = document.querySelector('.header__item-close-btn')
// headerBurger.addEventListener('click', () => {
//   headerItems.classList.add('header__items--show')
// })
// headerItemCloseBtn.addEventListener('click', () => {
//   headerItems.classList.remove('header__items--show')
// })
