/*================================SHOW MENU======================================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*================================REMOVE MENU MOBILE======================================*/
const navLink = document.querySelectorAll('.nav__link')


function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// navLink.forEach(function (n) {
//     n.addEventListener('click', linkAction);
// });
/*================================CHANGE BACKGROUND HEADER======================================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    // console.log(this.scrollY);
}
window.addEventListener('scroll', scrollHeader)
/*================================QUESTIONS ACCORDION======================================*/


const itemHeader = document.querySelectorAll("header.questions__header");

itemHeader.forEach(item => {
    item.addEventListener("click", () => {
        //finding if there already a accordion has active class?
        const activeItem = document.querySelector(".questions__header.active");
        //checking if there already a accordion has active class
        if (activeItem && activeItem !== item) {
            //removing existing active class and the height
            activeItem.classList.toggle("active");
            activeItem.nextElementSibling.style.height = 0;
        }

        //adding and removing active class by using toggle method

        item.classList.toggle("active");
        const itemBody = item.nextElementSibling;

        if (item.classList.contains("active")) {
            itemBody.style.height = itemBody.scrollHeight + "px";
        }
        else {
            itemBody.style.height = 0;
        }

    });
});




/*================================SCROLL SECTIONS ACTIVE LINK========================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href="#' + sectionId + '"]').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href="#' + sectionId + '"]').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*================================SHOW SCROLL TOP======================================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);
/*================================DARK LIGHT THEME======================================*/

// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'ri-sun-line'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//     // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })


//======================Alternative way to change DARK MODE================>>

const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeButton.classList.add('ri-sun-line');
    }
    else {
        themeButton.classList.remove('ri-sun-line');
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, { delay: 500 })
sr.reveal(`.home__social`, { delay: 600 })
sr.reveal(`.about__img, .contact__box`, { origin: 'left' })
sr.reveal(`.about__data, .contact__form`, { origin: 'right' })
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, { interval: 100 })