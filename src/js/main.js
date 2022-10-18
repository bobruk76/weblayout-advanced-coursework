const searchButton = document.querySelector('.header__search-btn')
const headerInput = document.querySelector('.header__input')


searchButton.addEventListener('click', () => {
  if (!headerInput.classList.contains('header__input--visible')) {
    headerInput.classList.add('header__input--visible')
  }

})

// yandex map
let myMap =  {}
ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
    center: (window.screen.width > 576) ? [55.75630609735012, 37.60695484283449] : [55.75566075845455, 37.62137440111788],
    controls: ['zoomControl'],
    zoom: 13
  });

  let myPlacemark = new ymaps.Placemark([55.769470, 37.639012], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/sprite.svg#mark',
    iconImageSize: [12, 12],
    iconImageOffset: [0, 0]
  });

  myPlacemark.events.add(['click'], function (e) {
    contactsMapWindow.classList.add('contacts__map-window--visible')
  })

  myMap.events.add('actionend', function (e) {
    console.log(e.originalEvent.map.getCenter())
  });

  myMap.geoObjects.add(myPlacemark);
}

const contactsMapWindow = document.querySelector('.contacts__map-window')
const contactsMapWindowBtn = document.querySelector('.contacts__map-window-btn')

contactsMapWindowBtn.addEventListener('click', () => {
  contactsMapWindow.classList.remove('contacts__map-window--visible')
})

// about-us__form-subscribe validate
const validationSubscribe = new JustValidate(
    '.about-us__form-subscribe',
    {
      errorLabelStyle: null,
    },
  )
;

validationSubscribe
  .addField('#email-subscribe', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);


const validationContacts = new JustValidate(
    '.contacts__form',
    {
      errorLabelStyle: null,
    },
  )
;

validationContacts
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели сообщение',
    },
  ])
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
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

const headerItemsHide = document.querySelectorAll('.header__item-bottom, .header__item-close');

["resize", "load"].forEach(ev => {
  window.addEventListener(ev, () => {
    headerItemsHide.forEach(Item => {
      if (window.screen.width > 576) {
        Item.classList.add('visually-hidden')
        myMap.setCenter?.([55.75630609735012, 37.60695484283449])
      } else {
        Item.classList.remove('visually-hidden')
        myMap.setCenter?.([55.75566075845455, 37.62137440111788])
      }
    })
  })
})

// burger
const headerBurger = document.querySelector('.header__nav-burger')
const headerItems = document.querySelector('.header__items')
const headerItemCloseBtn = document.querySelector('.header__item-close-btn')
headerBurger.addEventListener('click', () => {
  headerItems.classList.add('header__items--show')
})
headerItemCloseBtn.addEventListener('click', () => {
  headerItems.classList.remove('header__items--show')
})
