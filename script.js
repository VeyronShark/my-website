const navButton = document.getElementById("nav-open-close");
const navButtonIcon = document.getElementById("nav-icon");
const header = document.querySelector('header.mobile');

navButton.addEventListener('click', () => {
  if (header.classList.contains('open')){
    header.classList.remove('open');
    navButtonIcon.classList.remove('fa-xmark');
    navButtonIcon.classList.add('fa-bars');
  }
  else {
    header.classList.add('open');
    navButtonIcon.classList.remove('fa-bars');
    navButtonIcon.classList.add('fa-xmark');
  }
})