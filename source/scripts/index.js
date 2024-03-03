/* в этот файл добавляет скрипты*/

const navToggle = document.querySelector('.js-toggle-button');
const siteNav = document.querySelector('.site-navigation');

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
