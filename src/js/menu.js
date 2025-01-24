// Mobile menu
let menu = document.querySelector('.mobile-menu');
let menuOpened = document.querySelector('.burger');
let menuClosed = document.querySelector('.page__modal-close');

function menuToggle(elem, menu) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('mobile-menu--opened');
  })
}

menuToggle(menuOpened, menu);
menuToggle(menuClosed, menu);

// Main menu
function menuScroll(elems, menu) {
  for (let i = 0; i < elems.length; i++) {
    let linkElem = elems[i];
    linkElem.addEventListener('click', function (e) {
      e.preventDefault();

      if (menu) {
        menu.classList.toggle('mobile-menu--opened');
      }
      let linkHref = linkElem.getAttribute('href').substring(1);

      document.getElementById(linkHref).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  }
}

// Плавный scroll в основном меню
let menuLinks = document.querySelectorAll('.menu__main .menu__link');
menuScroll(menuLinks, false);

// Плавный scroll в мобильном меню
let mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
menuScroll(mobileMenuLinks, menu);
