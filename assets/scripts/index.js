const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelector('.links');
const backdrop = document.querySelector('.backdrop');

function removeClassesHandler() {
    links.classList.remove('right-zero');
    backdrop.classList.remove('display-block');
}

burgerMenu.addEventListener('click', () => {
    links.classList.add('right-zero');
    backdrop.classList.add('display-block');
})

backdrop.addEventListener('click', removeClassesHandler);

window.addEventListener('resize', () => {
    if(window.innerWidth >= 800 ) {
        removeClassesHandler();
    }
})