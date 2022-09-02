// Theme settings
autoTheme.addEventListener('click', () => autoSetTheme());
async function autoSetTheme() {
    for (let theme of themeSettings) {
        theme.classList.remove('active');
    }
    autoTheme.classList.add('active');
    await autoThemeMode();
};

lightTheme.addEventListener('click', () => {
    for (let theme of themeSettings) {
        theme.classList.remove('active');
    }
    lightTheme.classList.add('active');
    lightThemeMode();
});

darkTheme.addEventListener('click', () => {
    for (let theme of themeSettings) {
        theme.classList.remove('active');
    }
    darkTheme.classList.add('active');
    darkThemeMode();
});

const style = document.documentElement.style;

async function autoThemeMode() {
    while (autoTheme.classList.contains('active')) {
        let d = new Date();
        let hr = d.getHours();
        if (hr >= 17) {
            darkThemeMode();
        } else {
            lightThemeMode();
        }
        // wait for 1 hr
        await new Promise(r => setTimeout(r, 1800000));
    }
}

// auto by default
autoTheme.click();

function lightThemeMode() {
    style.setProperty('--light-bg-1', 'rgba(255, 255, 255, 30%)');
    style.setProperty('--light-bg-2', 'rgba(255, 255, 255, 45%)');
    style.setProperty('--light-bg-3', 'rgba(255, 255, 255, 85%)');
    style.setProperty('--light-text', 'rgb(70, 70, 74)');
    style.setProperty('--light-text-muted', 'rgb(0, 0, 0, 65%)');
    style.setProperty('--light-top-nav', 'rgba(235, 240, 255, 90%)');
    style.setProperty('--invert-filter', 'invert(0%)');
    // gradient
    style.setProperty('--gradient-1', '#d996fe');
    style.setProperty('--gradient-2', '#5d70ff');
}

function darkThemeMode() {
    style.setProperty('--light-bg-1', 'rgba(0, 0, 0, 25%)');
    style.setProperty('--light-bg-2', 'rgba(0, 0, 0, 40%)');
    style.setProperty('--light-bg-3', 'rgba(0, 0, 0, 85%)');
    style.setProperty('--light-text', 'rgb(245, 245, 245)');
    style.setProperty('--light-text-muted', 'rgb(255, 255, 255, 80%)');
    style.setProperty('--light-top-nav', 'rgb(40, 45, 70, 90%)');
    style.setProperty('--invert-filter', 'invert(100%)');
    // gradient
    style.setProperty('--gradient-1', '#d27fff');
    style.setProperty('--gradient-2', '#4156f0');
}