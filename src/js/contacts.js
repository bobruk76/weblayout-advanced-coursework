// yandex map
ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.75327840155143, 37.62946561125589],
    controls: [],
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([55.750819, 37.642411],
    {
      balloonContentHeader: "SitDownPls на Солянке",
      balloonContentBody: "<p>м. Китай-город, ул. Солянка, д.24</p><a class='phone' href='tel:+74958854547'></span><span class='phone__value'>+7 (495) 885-45-47</span></a><p><span class='grey'>Часы работы</span>: с 10:00 до 21:00</p>",
      balloonContentFooter: "<span class='grey'>Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр"
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/sprite.svg#mark',
      iconImageSize: [32, 22],
      iconImageOffset: [0, 0],
    });

  myMap.events.add('actionend', function (e) {
    console.log(e.originalEvent.map.getCenter(), e.originalEvent.map.getZoom())
  });

  myMap.geoObjects.add(myPlacemark)
  // myPlacemark.balloon.open()
}

