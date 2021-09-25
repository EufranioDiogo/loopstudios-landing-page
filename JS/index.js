let mobileMenuOn = false;
const hamburger = document.querySelector('.hamburger-menu');
const closeHamburger = document.querySelector('.close-menu');

hamburger.addEventListener('click', (e) => {
  document.querySelector('.mobile-menu-container').style.width = '100vw';
})


closeHamburger.addEventListener('click', (e) => {
  document.querySelector('.mobile-menu-container').style.width = '0vw';
})