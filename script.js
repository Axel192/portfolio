const menu = document.querySelector('.rightside-menu')
const opens = document.querySelector('.menu')
const closes = document.querySelector('.close')

opens.addEventListener('click', openModal)
closes.addEventListener('click', closeModal)

function openModal(){
    menu.classList.add('open-menu')
}
function closeModal() {
    menu.classList.remove('open-menu')
}