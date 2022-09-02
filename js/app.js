// Document elements
const pages = document.querySelectorAll('.display');
const buttons = document.querySelectorAll('.button');
const sideBarContainers = document.querySelectorAll('#sidebar .category');
const bottomNav = document.querySelectorAll('#bottom-nav .nav-menu-item');
const listContainers = document.querySelectorAll('.list-container');
const listContainersS = document.querySelectorAll('.list-container-s');
const mediumGroupCards = document.querySelectorAll('.group-card-m');
const displayWrapper = document.querySelector('.display-wrapper');
const introButton = document.querySelector('#intro-contact');
const mainElement = document.querySelector('main');
const settings = document.querySelector('#settings');
const settingsMenu = document.querySelector('#sidebar-bottom .item1');
const themeSettings = document.querySelectorAll('#sidebar-bottom .item1 .theme');
const autoTheme = document.querySelector('#auto-theme');
const lightTheme = document.querySelector('#light-theme');
const darkTheme = document.querySelector('#dark-theme');

const pagePositions = [];
const offsets = []
// Global variables
let activeTab = 0;

// track page location
for (let i = 0; i < pages.length; i++) {
    pagePositions.push(0);
}

function updatePage(activePage) {
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
        let cat = sideBarContainers[i];
        let sub = sideBarContainers[i].querySelector('.subsection');
        cat.classList.remove('active');
        sub.classList.add('hidden');
        bottomNav[i].classList.remove('active');
    }
    pages[activePage].classList.add('active');
    let cat = sideBarContainers[activePage];
    let sub = sideBarContainers[activePage].querySelector('.subsection');
    cat.classList.add('active');
    sub.classList.remove('hidden');
    bottomNav[activePage].classList.add('active');
    displayWrapper.scrollTop = pagePositions[activePage];
    activeTab = activePage;
}

// Add button event listeners
for (let button of buttons) {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
    button.addEventListener('mouseup', () => {
        button.classList.toggle('active');
    });
}

// Add side bar & bottom nav event listeners
for (let i = 0; i < sideBarContainers.length; i++) {
    let sideBarItem = sideBarContainers[i];
    let top = sideBarItem.querySelector('.top');
    top.addEventListener('click', () => {
        updatePage(i);
    });
    bottomNav[i].addEventListener('click', () => {
        updatePage(i);
    });
}

// Add list container event listeners
function linkListContainerButtons(container) {
    for (let item of container) {
        const button = item.querySelector('.button');
        const detail = item.querySelector('.list-item-detail');
        button.addEventListener('mousedown', () => {
            detail.classList.toggle('hidden');
            button.classList.toggle('active');
        })
    }
}

linkListContainerButtons(listContainers);
linkListContainerButtons(listContainersS);

// Scrolling
displayWrapper.addEventListener('scroll', () => {
    let topNav = pages[activeTab].querySelector('.top-nav');
    pagePositions[activeTab] = displayWrapper.scrollTop;
    if (displayWrapper.scrollTop > 32) {
        topNav.classList.remove('hidden');
    } else {
        topNav.classList.add('hidden');
    }
})

// Link button in intro
introButton.addEventListener('click', () => {
    updatePage(3);
})

// Link settings button
settings.addEventListener('click', () => {
    settings.classList.toggle('active');
    settingsMenu.classList.toggle('active');
})

// remove active from pages other than first page
for (let i = 1; i < pages.length; i++) {
    pages[i].classList.remove('active');
}

// Set main element position
mainElement.style.top = mainElement.offsetTop + "px";
mainElement.style.left = mainElement.offsetLeft + "px";
let prevTop = mainElement.style.top;
let prevLeft = mainElement.style.left;

// Make main element draggable
// Code from: https://www.w3schools.com/howto/howto_js_draggable.asp
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
mainElement.querySelector('#sidebar').onmousedown = dragMouseDown;
mainElement.querySelector('#nav-ctrl').onmousedown = dragMouseDown;
for (let nav of mainElement.querySelectorAll('.top-nav')) {
    nav.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    mainElement.style.top = (mainElement.offsetTop - pos2) + "px";
    mainElement.style.left = (mainElement.offsetLeft - pos1) + "px";
    prevTop = mainElement.style.top;
    prevLeft = mainElement.style.left;
}

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
}

