var navBtn = document.getElementById('nav-btn');
var navbar = document.getElementById('navbar');
var navClose = document.getElementById('nav-close');
navBtn.addEventListener('click', function () {
  navbar.classList.add('nav-show');
});
navClose.addEventListener('click', function () {
  navbar.classList.remove('nav-show');
});
