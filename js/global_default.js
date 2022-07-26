function toggleDarkMode() {
    document.querySelector('body').classList.toggle('darkmode');
    for (let element of document.getElementsByTagName('h2')) {
        element.classList.toggle('darkmode');
    }
    for (let element of document.getElementsByTagName('h3')) {
        element.classList.toggle('darkmode');
    }
    for (let element of document.getElementsByTagName('h5')) {
        element.classList.toggle('darkmode');
    }
    for (let element of document.getElementsByTagName('footer')) {
        element.classList.toggle('darkmode');
    }
    for (let element of document.getElementsByTagName('a')) {
        element.classList.toggle('darkmode');
    }
    for (let element of document.getElementsByClassName('lang')) {
        element.classList.toggle('darkmode');
    }
    for (let element of document.getElementsByClassName('edu-sub')) {
        element.classList.toggle('darkmode');
    }
    for (let element of document.getElementsByClassName('full-width-cards')) {
        element.classList.toggle('darkmode');
    }
}

// dark mode
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.onclick = toggleDarkMode;