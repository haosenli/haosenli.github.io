const closeButton = document.querySelector('#red');
const minimizeButton = document.querySelector('#yellow');
const expandButton = document.querySelector('#green');

closeButton.addEventListener('click', () => {
    mainElement.classList.remove('expanded');
    mainElement.classList.remove('minimized');
    mainElement.classList.toggle('closed');
})

minimizeButton.addEventListener('click', () => {
    // assign new position
    if (mainElement.classList.contains('minimized')) {
        mainElement.style.top = prevTop;
        mainElement.style.left = prevLeft;
    } else {
        // save position
        prevTop = mainElement.style.top;
        prevLeft = mainElement.style.left;
        mainElement.style.top = "0px";
        mainElement.style.left = "0px";
    }
    mainElement.classList.remove('expanded');
    mainElement.classList.toggle('minimized');
})

expandButton.addEventListener('click', () => {
    // assign new position
    if (mainElement.classList.contains('expanded')) {
        mainElement.style.top = prevTop;
        mainElement.style.left = prevLeft;
    } else {
        // save position
        prevTop = mainElement.style.top;
        prevLeft = mainElement.style.left;
        mainElement.style.top = "0px";
        mainElement.style.left = "0px";
    }
    mainElement.classList.toggle('expanded');
})

window.addEventListener('resize', () => {
    // width
    if (window.innerWidth <= mainElement.offsetWidth) {
        mainElement.style.left = "0px";
        widthAdjustments(displayWrapper.offsetWidth);
    }  else {
        mainElement.style.left = prevLeft;
    }
    // height
    if (window.innerHeight <= mainElement.offsetHeight) {
        mainElement.style.top = "0px";
    }  else {
        mainElement.style.top = prevTop;
    }
})

// Initial width check
const hScrolls = document.querySelectorAll('.group-container.h-scroll');
const col2Groups = document.querySelectorAll('.group-container.col2');
const col3Groups = document.querySelectorAll('.group-container.col3');
const listDropdowns = document.querySelectorAll('.list-dropdown');
const detailedLists = document.querySelectorAll('.detailed-list');
const textImages = document.querySelectorAll('.text-img-container');
widthAdjustments(displayWrapper.offsetWidth);

function widthAdjustments(width) {
    // gt 1500
    if (width >= 1500) {
        for (let col3Group of col3Groups) {
            col3Group.classList.add('c4');
        }
    } else {
        for (let col3Group of col3Groups) {
            col3Group.classList.remove('c4');
        }
    }
    // gt 1350
    if (width >= 1350) {
        for (let col2Group of col2Groups) {
            col2Group.classList.add('c4');
        }
    } else {
        for (let col2Group of col2Groups) {
            col2Group.classList.remove('c4');
        }
    }
    // 972px
    if (width <= 972) {
        for (let detailedList of detailedLists) {
            detailedList.classList.add('l1');
        }
    } else {
        for (let detailedList of detailedLists) {
            detailedList.classList.remove('l1');
        }
    }
    // 900px
    if (width <= 900) {
        for (let textImage of textImages) {
            textImage.classList.add('l1');
        }
    } else {
        for (let textImage of textImages) {
            textImage.classList.remove('l1');
        }
    }
    // 840px
    if (width <= 840) {
        for (let hScroll of hScrolls) {
            hScroll.classList.add('c2');
        }
        for (let textImage of textImages) {
            textImage.classList.add('l2');
        }
    } else {
        for (let hScroll of hScrolls) {
            hScroll.classList.remove('c2');
        }
        for (let textImage of textImages) {
            textImage.classList.remove('l2');
        }
    }
    // 780px
    if (width <= 780) {
        for (let col3Group of col3Groups) {
            col3Group.classList.add('c2');
        }
        for (let textImage of textImages) {
            textImage.classList.add('l3');
        }
    } else {
        for (let col3Group of col3Groups) {
            col3Group.classList.remove('c2');
        }
        for (let textImage of textImages) {
            textImage.classList.remove('l3');
        }
    }
    // 710px
    if (width <= 710) {
        for (let listDropdown of listDropdowns) {
            listDropdown.classList.add('l1');
        }
        for (let textImage of textImages) {
            textImage.classList.add('l4');
        }
    } else {
        for (let listDropdown of listDropdowns) {
            listDropdown.classList.remove('l1');
        }
        for (let textImage of textImages) {
            textImage.classList.remove('l4');
        }
    }
    // 650px
    if (width <= 650) {
        for (let col2Group of col2Groups) {
            col2Group.classList.add('c1');
        }
    } else {
        for (let col2Group of col2Groups) {
            col2Group.classList.remove('c1');
        }
    }
    // 610px
    if (width <= 610) {
        for (let listDropdown of listDropdowns) {
            listDropdown.classList.add('l2');
        }
    } else {
        for (let listDropdown of listDropdowns) {
            listDropdown.classList.remove('l2');
        }
    }
    // 570px
    if (width <= 570) {
        for (let hScroll of hScrolls) {
            hScroll.classList.add('c1');
        }
    } else {
        for (let hScroll of hScrolls) {
            hScroll.classList.remove('c1');
        }
    }
    // 520px
    if (width <= 520) {
        for (let col3Group of col3Groups) {
            col3Group.classList.add('c1');
        }
    } else {
        for (let col3Group of col3Groups) {
            col3Group.classList.remove('c1');
        }
    }
    // 485px
    if (width <= 485) {
        for (let detailedList of detailedLists) {
            detailedList.classList.add('l2');
        }
    } else {
        for (let detailedList of detailedLists) {
            detailedList.classList.remove('l2');
        }
    }
}