var navMain = document.querySelector('.navigation');
var navButton = document.querySelector('.navigation-button');

navMain.classList.remove('navigation--nojs');
navButton.addEventListener('click', function() {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});
