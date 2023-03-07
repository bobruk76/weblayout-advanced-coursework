import Choices from 'choices.js'

const headerSelect = document.querySelector('#headerSelect');
const headerChoices = new Choices(headerSelect, {
  itemSelectText: '',
  placeholder: false,
  allowHTML: true,
  searchEnabled: false,
  shouldSort: false,
  labelId: 'headerSelectAria',
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
});

const categorySelect = document.querySelector('#category');
const categoryChoices = new Choices(categorySelect, {
  itemSelectText: '',
  placeholder: false,
  allowHTML: true,
  searchEnabled: false,
  shouldSort: false,
  labelId: 'categoryAria',
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

// burger
const headerBurger = document.querySelector('.header__nav-burger')
const headerMenu = document.querySelector('.header__menu')
const headerItemCloseBtn = document.querySelector('.header__item-close-btn')
headerBurger.addEventListener('click', () => {
  headerMenu.classList.add('header__menu--show')
})
headerItemCloseBtn.addEventListener('click', () => {
  headerMenu.classList.remove('header__menu--show')
})
