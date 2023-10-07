const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#nav');


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});