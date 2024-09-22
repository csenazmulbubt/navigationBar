let menu = document.querySelector('.menu-icon');
let middleContainer = document.querySelector('.middle-header-container');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    middleContainer.classList.toggle('open');
}