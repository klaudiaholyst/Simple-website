const menuLinks = [...document.querySelectorAll('.menu__link')];
const checkBox = document.getElementById('nav-checkbox')
menuLinks.forEach(item=>item.addEventListener('click', function(){
    checkBox.checked = false;
}))

const nav = document.getElementById('nav')

document.addEventListener('scroll', function(){
    if (window.pageYOffset > 200 && !nav.classList.contains("small")){
        nav.classList.add("small")
    }
    if (window.pageYOffset <= 200 && nav.classList.contains("small")){
        nav.classList.remove("small")
    }
})