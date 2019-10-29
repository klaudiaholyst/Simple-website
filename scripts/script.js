const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu')
const menuItems = [...document.querySelectorAll('.menu__item')];
const checkBox = document.getElementById('nav-checkbox');
const nav = document.getElementById('nav');

function showOrHide(){
    menu.classList.toggle('active');
    menuItems.forEach(item => item.classList.toggle('active-link'));
}

menuButton.addEventListener('click', showOrHide);

document.addEventListener('scroll', function () {
    if (window.pageYOffset > 200 && !nav.classList.contains("small")) {
        nav.classList.add("small")
    }
    if (window.pageYOffset <= 200 && nav.classList.contains("small")) {
        nav.classList.remove("small")
    }
})
if (menu.classList.contains('active')){
menuItems.forEach(item=>item.addEventListener('click', showOrHide));
}

$('.menu__item--1').on('click', function () {
    $('body,html').animate({
        scrollTop: $('#header').offset().top-100
    }, 500)
})

$('.menu__item--2').on('click', function () {
    $('body,html').animate({
        scrollTop: $('#about').offset().top-100
    }, 500)
})
$('.menu__item--3').on('click', function () {
    $('body,html').animate({
        scrollTop: $('#services').offset().top-100
    }, 500)
})
$('.menu__item--4').on('click', function () {
    $('body,html').animate({
        scrollTop: $('#gallery').offset().top-100
    }, 500)
})

$('.menu__item--5').on('click', function () {
    $('body,html').animate({
        scrollTop: $('#blog').offset().top-100
    }, 500)
})
$('.menu__item--6').on('click', function () {
    $('body,html').animate({
        scrollTop: $('#contact').offset().top-100
    }, 500)
})