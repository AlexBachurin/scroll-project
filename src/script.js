window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.nav__menu'),
          hamburger = document.querySelector('.hamburger'),
          menuBlock = document.querySelector('.nav__menu-block')

    //toggle menu and hamburger
    hamburger.addEventListener('click', () => {
        //get links block height
        const linksHeight = menuBlock.getBoundingClientRect().height;
        //get menu height
        const menuHeight = menu.getBoundingClientRect().height;
        //check if menu height is 0,then add dynamically calculated links height
        //else return to 0
        if (menuHeight === 0) {
            menu.style.height = `${linksHeight}px`;
            console.log(menu.style.height)
        } else {
            menu.style.height = `0px`;
        }
        hamburger.classList.toggle('is-active')
    })

    // ****fixed navbar*****
    //get height of navbar
    const nav = document.querySelector('.nav');
          
    //use window scroll event to see when we need add class to navbar
    window.addEventListener('scroll', () => {
        const navHeight = nav.getBoundingClientRect().height;
        //get scroll offset
        const offset = window.pageYOffset;
        //check then we have offset > navbar height we make navbar fixed
        if (offset > navHeight) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav')
        }
    })
})