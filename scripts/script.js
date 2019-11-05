{
const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const nav = document.getElementById('nav');
const MenuButtonImg = document.getElementById('menu-button__img');
// SHOW OR HIDE MENU ON MOBILE

function showOrHide() {
    menu.classList.toggle('active');
    menuItems.forEach(item => item.classList.toggle('active-link'));
    if (menu.classList.contains('active')){
        menuButton.setAttribute("aria-expanded", 'true');
        MenuButtonImg.setAttribute("src", "img/times-solid.svg");
    } else{
        menuButton.setAttribute("aria-expanded", 'false');
        MenuButtonImg.setAttribute("src", "img/bars.svg")
    }
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



//DELETING BUTTON ATTRIBUTE ON MOBILE 

if ($(window).width() < 756){
    menuButton.removeAttribute('aria-haspopup')
} else{
    menuButton.setAttribute('aria-haspopup=true')
}

}