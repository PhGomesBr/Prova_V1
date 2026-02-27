const mobileMenu = document.querySelector('.mobileMenu');
const navList = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close-btn');


// Abre menu
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active'); // anima o hamburger
  navList.classList.toggle('active');
  overlay.classList.toggle('active');
});