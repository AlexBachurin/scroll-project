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
    const nav = document.querySelector('.nav'),
          scrollToTop = document.querySelector('.scrollToTop'),
          footer = document.querySelector('.footer');
          

          
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

        // **** scroll to top button ****

        //if we scrolled more than 1000px show our button
        if (offset > 1000) {
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }

        //change color of button if we scrolled to footer
         //formula to calculate position there to change color
         const position = footer.offsetTop;
         const footerHeight = footer.getBoundingClientRect().height;
         console.log(position - (navHeight + footerHeight + 100))
         const target = position - (navHeight + footerHeight + 100)
        if (offset > target) {
            scrollToTop.style.color = '#fff';
        } else {
            scrollToTop.style.color = '';
        }
    })


    // ***** links scroll *****

    const links = document.querySelectorAll('.nav__menu-link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            //nav to specific spot, use slice to remove #
            const id = e.currentTarget.getAttribute('href').slice(1);
            const element = document.getElementById(id);
            let pos = element.offsetTop
        })
    })
   
   
})