const sandwich = document.getElementById('menu-mobile__show-btn')
const menu_mobile = document.getElementById('menu-mobile')
const cross = document.getElementById('cross')

let showMobileMenu = () => menu_mobile.style.display = 'inline-block'
sandwich.addEventListener('click', showMobileMenu)

let hideMobileMenu = () => menu_mobile.style.display = 'none'
cross.addEventListener('click', hideMobileMenu)