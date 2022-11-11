const menuActive = document.getElementById('logo');
const menuItems = document.querySelector('.menu__items');

menuActive.addEventListener('click', ()=>{
    menuActive.classList.toggle('bx-x');
    menuItems.classList.toggle('menu-active');
});