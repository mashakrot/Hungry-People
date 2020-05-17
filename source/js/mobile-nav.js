var navMain = document.querySelector('.navigation');
var navButton = document.querySelector('.navigation-button');

navMain.classList.remove('navigation--nojs');
navButton.addEventListener('click', function() {
  if (navMain.classList.contains('navigation--opened')) {
    navMain.classList.remove('navigation--opened');
    navMain.classList.add('navigation--closed');
  } else {
    navMain.classList.add('navigation--opened');
    navMain.classList.remove('navigation--closed');
  }
});
