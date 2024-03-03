const slider = document.querySelector('.slider');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');
const sliderItems = [...slider.querySelectorAll('li')];
const paginationButtons = [...document.querySelectorAll('.slider-pagination__button')];
const slidesCount = sliderItems.length;

let sliderIndex = 0;

const updateButtons = () => {
  buttonPrev.disabled = sliderIndex === 0;
  buttonNext.disabled = sliderIndex === sliderItems.length - 1;
};

const updateSlider = (index) => {
  sliderIndex = index;
  sliderItems.forEach((item) => item.classList.remove('slider__item--current'));
  sliderItems[index].classList.add('slider__item--current');
  document.querySelector('.slider-pagination__button--active').classList.remove('slider-pagination__button--active');
  paginationButtons[index].classList.add('slider-pagination__button--active');
  updateButtons();
  setActivePaginationButton();
};

updateSlider(sliderIndex);

function setActivePaginationButton () {
  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      document.querySelector('.slider-pagination__button--active').classList.remove('slider-pagination__button--active');
      button.classList.add('slider-pagination__button--active');
      updateSlider(index);
    });
  });
}

const showPreviousSlide = () => {
  sliderIndex = (sliderIndex - 1 + slidesCount) % slidesCount;
  updateSlider(sliderIndex);
};

const showNextSlide = () => {
  sliderIndex = (sliderIndex + 1) % slidesCount;
  updateSlider(sliderIndex);
};

buttonPrev.addEventListener('click', showPreviousSlide);
buttonNext.addEventListener('click', showNextSlide);
