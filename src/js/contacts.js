// yandex map
ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.75327840155143, 37.62946561125589],
    controls: ['zoomControl'],
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([55.750819, 37.642411], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/sprite.svg#mark',
    iconImageSize: [32, 22],
    iconImageOffset: [0, 0]
  });

  myPlacemark.events.add(['click'], function (e) {
    contactsMapWindow.classList.add('contacts__map-window--visible')
  })

  myMap.events.add('actionend', function (e) {
    console.log(e.originalEvent.map.getCenter(), e.originalEvent.map.getZoom())
  });

  myMap.geoObjects.add(myPlacemark);
}

// const contactsMapWindow = document.querySelector('.contacts-page__map-window')
// const contactsMapWindowBtn = document.querySelector('.contacts-page__map-window-btn')
//
// contactsMapWindowBtn.addEventListener('click', () => {
//   contactsMapWindow.classList.remove('contacts__map-window--visible')
// })
