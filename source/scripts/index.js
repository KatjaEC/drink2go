/* в этот файл добавляет скрипты*/

const navToggle = document.querySelector('.js-toggle-button');
const siteNav = document.querySelector('.site-navigation');

const sliderItems = document.querySelectorAll('.slider-item');
const sliderButtonPrev = document.querySelector('.slider-button-prev');
const sliderButtonNext = document.querySelector('.slider-button-next');
const sliderList = document.querySelector('.slider');
const sliderPagination = document.querySelector('.slider-pagination');
const sliderPaginationItem = document.querySelector('.slider-pagination__item');
const sliderPaginationButtons = document.querySelectorAll('.slider-pagination__button');

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

if (sliderList) {
  const model = [];

  const initModel = () => {
    const fragment = document.createDocumentFragment();
    sliderItems.forEach(() => {
      model.push(false);
      // const sliderElement = sliderPaginationItem.cloneNode(true);
      fragment.append(sliderPaginationItem);
    });
    model[0] = true;
    // sliderPagination.innerHTML - '';
    sliderPagination.append(fragment);
    sliderPaginationButtons.forEach((item) => {
      item.classList.remove('slider-pagination__button--active');
    });
    document.querySelector('.slider-pagination__button').classList.add('slider-pagination__button--active');
  };

  initModel();

  const setActiveElement = (index) => {
    model.forEach((item, i) => {
      if (i === index) {
        model[i] = true;
      } else {
        model[i] = false;
      }
    });
  };

  const renderActiveScreen = () => {
    const index = model.findIndex((item) => item);
    sliderList.style.transform = `translateX(${-1440 * index}px)`;
  };

  const renderActivePaginationItem = () => {
    document.querySelector('.slider-pagination__button--active').classList.remove('slider-pagination__button--active');
    const index = model.findIndex((item) => item);
    Array.from(sliderPaginationButtons)[index].querySelector('button').classList.add('slider-pagination__button--active');
  };

  const setTabIndex = () => {
    const index = model.findIndex((item) => item);
    sliderItems.forEach((item, i) => {
      const links = item.querySelectorAll('a');
      links.forEach((link) => {
        if (index === i) {
          link.tabIndex = 0;
        } else {
          link.tabIndex = -1;
        }
      });
    });
  };

  setTabIndex();

  const render = () => {
    renderActiveScreen();
    renderActivePaginationItem();
    setTabIndex();
  };

  sliderButtonPrev.addEventListener('click', () => {
    const index = model.findIndex((item) => item);
    const previous = index - 1 > 0 ? index - 1 : 0;
    setActiveElement(previous);
    render();
  });

  sliderButtonNext.addEventListener('click', () => {
    const index = model.findIndex((item) => item);
    const next = index + 1 < model.length ? index + 1 : model.length - 1;
    setActiveElement(next);
    render();
  });

  sliderPagination.addEventListener('click', (evt) => {
    const sliderPaginationItems = document.querySelectorAll('.slider-pagination__item');
    const index = Array.from(sliderPaginationItems).indexOf(evt.target.closest('button'));
    setActiveElement(index);
    render();
  });
}

//document.querySelectorAll('.slider-button').classList.add('slider-button--disabled');


// const slider = document.querySelector('.slider');
// const sliderItems = slider.querySelectorAll('.slider__item');
// const buttonPrevious = slider.querySelector('.slider-button-prev');
// const buttonNext = slider.querySelector('.slider-button-next');
// const sliderPaginationButtons = slider.querySelectorAll('.slider__pagination-item');

// let currentSlide = 0;

// function showSlide(i) {
//   sliderItems.forEach((item) => item.classList.remove('slider__item--current'));
//   sliderItems[i].classList.add('slider__item--current');
//   sliderPaginationButtons.forEach((button) => button.classList.remove('slider__pagination-item--current'));
//   sliderPaginationButtons[i].classList.add('slider__pagination-item--current');
//   currentSlide = i;
//   updateButtons();
// }

// function updateButtons() {
//   buttonPrevious.disabled = currentSlide === 0;
//   buttonNext.disabled = currentSlide === sliderItems.length - 1;
// }

// buttonPrevious.addEventListener('click', () => {
//   if (currentSlide > 0) {
//     showSlide(currentSlide - 1);
//   }
// });

// buttonNext.addEventListener('click', () => {
//   if (currentSlide < sliderItems.length - 1) {
//     showSlide(currentSlide + 1);
//   }
// });

// sliderPaginationButtons.forEach((button, i) => {
//   button.addEventListener('click', () => {
//     showSlide(i);
//   });
// });

// updateButtons();
