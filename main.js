const toggle = document.querySelector('.toggle');
const overlay = document.querySelector('#overlay');
const navBar = document.querySelector('#nav-bar');
const body = document.querySelector('body');

toggle.addEventListener("click", function () {
    toggle.classList.toggle('toggle-close');
    overlay.classList.toggle('overlay');
    navBar.classList.toggle('nav-menu');
    body.classList.toggle('active');
});

