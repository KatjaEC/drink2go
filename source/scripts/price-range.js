const priceRange = document.querySelector('.filter-range__wrapper');
const priceInputMin = document.getElementById('price-min-input');
const priceInputMax = document.getElementById('price-max-input');

const RANGE_DEFAULT_MIN = 0;
const RANGE_DEFAULT_MAX = 1000;

noUiSlider.create(priceRange, {
  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    'min': RANGE_DEFAULT_MIN,
    'max': RANGE_DEFAULT_MAX,
  },
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseInt(value, 10);
    },
  },
});

priceRange.noUiSlider.on('update', (values, handle) => {
  if (handle) {
    priceInputMax.value = values[handle];
  } else {
    priceInputMin.value = values[handle];
  }
});

priceInputMin.addEventListener('change', function () {
  priceRange.noUiSlider.set([this.value, null]);
});

priceInputMax.addEventListener('change', function () {
  priceRange.noUiSlider.set([null, this.value]);
});
