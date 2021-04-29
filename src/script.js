window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.nav__menu'),
          hamburger = document.querySelector('.hamburger')

    //toggle menu
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show-nav');
        hamburger.classList.toggle('is-active')
    })
})