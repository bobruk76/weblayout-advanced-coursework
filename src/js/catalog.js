import Swiper, {Pagination, Navigation, Grid} from 'swiper'

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

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

// multi-range
const inputLeft = document.querySelector(".multi-range-slider__input-number--left")
const inputRight = document.querySelector(".multi-range-slider__input-number--right")
const inputRangeLeft = document.querySelector(".multi-range-slider__input-range--left")
const inputRangeRight = document.querySelector(".multi-range-slider__input-range--right")

const range = document.querySelector(".multi-range > .range")

const setValue = function (thisSide) {
  const mathFunc = (thisSide === 'left') ? 'min' : 'max'

  const _this = (thisSide === 'left') ? inputRangeLeft : inputRangeRight
  const _that = (thisSide === 'left') ? inputRangeRight : inputRangeLeft

  const thumb = document.querySelector(".multi-range > .thumb--" + thisSide)


  const inputValue = (thisSide === 'left') ? inputLeft : inputRight
  const [min, max] = [parseInt(_this.min), parseInt(_this.max)]

  _this.value = Math[mathFunc](parseInt(_this.value), parseInt(_that.value));

  inputValue.value = _this.value;
  const percent = ((_this.value - min) / (max - min)) * 100;

  thumb.style[thisSide] = (thisSide === 'left') ? percent + "%" : 100 - percent + "%";
  range.style[thisSide] = (thisSide === 'left') ? percent + "%" : 100 - percent + "%";
}

inputLeft.addEventListener("change", () => {
  inputRangeLeft.value = inputLeft.value
  setValue('left')
});

inputRight.addEventListener("change", () => {
  inputRangeRight.value = inputRight.value
  setValue('right')
});

inputRangeLeft.addEventListener("input", () => {
  setValue('left')
});

inputRangeRight.addEventListener("input", () => {
  setValue('right')
});

window.addEventListener("load", () => {
  setValue('left')
  setValue('right')
})

window.addEventListener("resize", () => {
  setValue('left')
  setValue('right')
})
