const btnMenu = document.querySelector('#button-menu')
const menu = document.querySelector('.menu')
const html = document.querySelector('#html')
const cxResultSkill = document.querySelector('.result-skill')



html.addEventListener('mouseover', () =>{
    cxResultSkill.textContent = 'O HTML é ...'
});

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hide')
});