var scale = document.querySelector('.scale');
var scaleButton = document.querySelector('.scale__toggle');

scale.addEventListener('click', function() {
  if (scaleButton.classList.contains('scale__toggle--before')) {
    scaleButton.classList.remove('scale__toggle--before');
    scaleButton.classList.add('scale__toggle--after');
  } else {
    scaleButton.classList.remove('scale__toggle--after');
    scaleButton.classList.add('scale__toggle--before');
  }
});
