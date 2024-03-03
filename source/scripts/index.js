/* в этот файл добавляет скрипты*/

const navToggle = document.querySelector('.js-toggle-button');
const siteNav = document.querySelector('.site-navigation');

const slider = document.querySelector('.slider');
const sliderButtonPrev = document.querySelector('.slider-button-prev');
const sliderButtonNext = document.querySelector('.slider-button-next');
const sliderItems = [...slider.querySelectorAll('li')];
const sliderPaginationButtons = [...document.querySelectorAll('.slider-pagination__button')];
const sliderCount = sliderItems.length;

let sliderIndex = 0;

const updateButtons = () => {
  sliderButtonPrev.disabled = sliderIndex === 0;
  sliderButtonNext.disabled = sliderIndex === sliderItems.length - 1;
};

const updateSlider = (index) => {
  sliderItems.forEach((item) => item.classList.remove('slider__item--current'));
  sliderItems[index].classList.add('slider__item--current');
  sliderIndex = index;
  updateButtons();
  setActivePaginationButton();
};

updateSlider(sliderIndex);

function setActivePaginationButton () {
  sliderPaginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      document.querySelector('.slider-pagination__button--active').classList.remove('slider-pagination__button--active');
      button.classList.add('slider-pagination__button--active');
      updateSlider(index);
    });
  });
}

const showPreviousSlide = () => {
  sliderIndex = (sliderIndex - 1 + sliderCount) % sliderCount;
  updateSlider(sliderIndex);
};

const showNextSlide = () => {
  sliderIndex = (sliderIndex + 1) % sliderCount;
  updateSlider(sliderIndex);
};

sliderButtonPrev.addEventListener('click', showPreviousSlide);
sliderButtonNext.addEventListener('click', showNextSlide);


if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (siteNav.classList.contains('site-navigation--closed')) {
      siteNav.classList.remove('site-navigation--closed');
      siteNav.classList.add('site-navigation--opened');
      navToggle.classList.remove('navigation-menu__toggle--closed');
      navToggle.classList.add('navigation-menu__toggle--opened');
    } else {
      siteNav.classList.add('site-navigation--closed');
      siteNav.classList.remove('site-navigation--opened');
      navToggle.classList.add('navigation-menu__toggle--closed');
      navToggle.classList.remove('navigation-menu__toggle--opened');
    }
  });
}
