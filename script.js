const navButton = document.getElementById("nav-open-close");
const navButtonIcon = document.getElementById("nav-icon");
const header = document.querySelector('header.mobile');

function toggleNav() {
  header.classList.toggle('open');
  navButtonIcon.classList.toggle('fa-bars');
  navButtonIcon.classList.toggle('fa-xmark');
}
navButton.addEventListener('click', () => {
  toggleNav();
})
navButton.addEventListener('blur', () => {
  toggleNav();
})