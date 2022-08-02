const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelector('.links');
const backdrop = document.querySelector('.backdrop');
const header = document.querySelector('header');

// idk

function removeClassesHandler() {
    links.classList.remove('right-zero');
    backdrop.classList.remove('display-block');
    header.classList.remove('overflow-visible');
    document.body.style.overflow = 'visible';
}

burgerMenu.addEventListener('click', () => {
    header.classList.add('overflow-visible');
    links.classList.add('right-zero');
    backdrop.classList.add('display-block');
    document.body.style.overflow = 'hidden';
    header.scrollIntoView();
})

backdrop.addEventListener('click', removeClassesHandler);

window.addEventListener('resize', () => {
    if(window.innerWidth >= 800 ) {
        removeClassesHandler();
    }
})