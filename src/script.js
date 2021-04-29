window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.nav__menu'),
          hamburger = document.querySelector('.hamburger'),
          menuBlock = document.querySelector('.nav__menu-block')

    //toggle menu and hamburger
    hamburger.addEventListener('click', () => {
        //get links block height
        const linksHeight = menuBlock.getBoundingClientRect().height;
        console.log(linksHeight)
        const menuHeight = menu.getBoundingClientRect().height;
        console.log(menuHeight)
        if (menuHeight === 0) {
            menu.style.height = `${linksHeight}px`;
            console.log(menu.style.height)
        } else {
            menu.style.height = `0px`;
        }
        hamburger.classList.toggle('is-active')
    })
})