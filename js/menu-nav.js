/*  */
const menu = document.getElementById('menu'),
    closeMenu = document.getElementById('closeMenu'),
    openMenu = document.getElementById('openMenu');

openMenu.addEventListener('click', ()=>{
    menu.classList.add('downMenu')
})
closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('downMenu');
});