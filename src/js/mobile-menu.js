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
