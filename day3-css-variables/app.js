var root = document.querySelector(':root');

const SPACING = document.getElementById('spacing');
SPACING.addEventListener('mousemove', (event) => {
    root.style.setProperty('--spacing', `${event.target.value}px`)
})

const BLUR = document.getElementById('blur');
BLUR.addEventListener('mousemove', (event) => {
    root.style.setProperty('--blur', `${event.target.value}px`)
})

const BASE_COLOR = document.getElementById('base');
BASE_COLOR.addEventListener('mousemove', (event) => {
    root.style.setProperty('--base', event.target.value)
})
