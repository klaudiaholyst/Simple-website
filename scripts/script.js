{
const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const checkBox = document.getElementById('nav-checkbox');
const nav = document.getElementById('nav');

// SHOW OR HIDE MENU ON MOBILE

function showOrHide() {
    menu.classList.toggle('active');
    menuItems.forEach(item => item.classList.toggle('active-link'));
}
menuButton.addEventListener('click', showOrHide);

// MAKE NAV SMALLER
document.addEventListener('scroll', function () {
    nav.classList.toggle('small', window.pageYOffset>200);
})

// CLOSING MENU ON CLICK ON MOBILE

menu.addEventListener("click", function (ev) {
    if (ev.target.nodeName==="A" && menu.classList.contains('active')){
        showOrHide();
    }
}, false);

}
