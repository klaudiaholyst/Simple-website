{
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuItems = [...document.querySelectorAll('.menu__item')];
const checkBox = document.getElementById('nav-checkbox');
const nav = document.getElementById('nav');

function showOrHide() {
    menu.classList.toggle('active');
    menuItems.forEach(item => item.classList.toggle('active-link'));
}
menuButton.addEventListener('click', showOrHide);

document.addEventListener('scroll', function () {
    nav.classList.toggle('small', window.pageYOffset>200);
})

if (menu.classList.contains('active')) {
    menuItems.forEach(item => item.addEventListener('click', showOrHide));
}
}