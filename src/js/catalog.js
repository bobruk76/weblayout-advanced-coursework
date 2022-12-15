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

const inputLeft = document.querySelector(".multi-range-slider__input-number--left");
const inputRight = document.querySelector(".multi-range-slider__input-number--right");

const inputRangeLeft = document.querySelector(".multi-range-slider__input-range--left");
const inputRangeRight = document.querySelector(".multi-range-slider__input-range--right");

const thumbLeft = document.querySelector(".multi-range > .thumb.left");
const thumbRight = document.querySelector(".multi-range > .thumb.right");
const range = document.querySelector(".multi-range > .range");

const setLeftValue = () => {
  const _this = inputRangeLeft;
  const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRangeRight.value));

  inputLeft.value = _this.value;
  const percent = ((_this.value - min) / (max - min)) * 100;
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}

const setRightValue = () => {
  const _this = inputRangeRight;
  const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
  _this.value = Math.max(parseInt(_this.value), parseInt(inputRangeLeft.value));

  inputRight.value = _this.value;
  const percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}

inputRangeLeft.addEventListener("input", setLeftValue);
inputRangeRight.addEventListener("input", setRightValue);

window.addEventListener("load", () => {
  setLeftValue()
  setRightValue()
})

window.addEventListener("resize", () => {
  setLeftValue()
  setRightValue()
})
