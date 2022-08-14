const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelector('.links');
const backdrop = document.querySelector('.backdrop');
const header = document.querySelector('header');
const deformablePhoto = document.getElementById('deformable-picture');
const deformText = document.getElementById('text-after-deform');

let borderRadiusData = [0, 0 ,0 ,0];
let clicksLeft = 5;
let clickable = true;

function deformPhotoHandler(event) {
    if (!clickable) return;
    const photo = event.target;
    if (clicksLeft == 1) {
        clickable = false;
        photo.style.display = 'none';
        deformText.style.display = 'block';
    }
    const rndNum = Math.floor(Math.random() * 5 + 10)
    const rndCorner = Math.floor(Math.random() * 4);
    console.log(rndCorner);
    switch (rndCorner) {
        case 0:
            photo.style.borderTopLeftRadius = `${borderRadiusData[0] + rndNum}rem`
            borderRadiusData[0] += rndNum;
            break;
        case 1:
            photo.style.borderTopRightRadius = `${borderRadiusData[1] + rndNum}rem`
            borderRadiusData[1] += rndNum;
            break;
        case 2:
            photo.style.borderBottomLeftRadius = `${borderRadiusData[2] + rndNum}rem`
            borderRadiusData[2] += rndNum;
            break;
        case 3:
            photo.style.borderBottomRightRadius = `${borderRadiusData[3] + rndNum}rem`
            borderRadiusData[3] += rndNum;
            break;
    }
    clicksLeft--;
    console.log(borderRadiusData);
}

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

deformablePhoto.addEventListener('click', deformPhotoHandler);