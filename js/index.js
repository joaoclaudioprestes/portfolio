const btnMenu = document.querySelector('#button-menu')
const menu = document.querySelector('.menu')


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hide')
});