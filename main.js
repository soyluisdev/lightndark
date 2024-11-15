const toggleSwitch = document.querySelector('.light-dark');
const nav = document.querySelector('.menu-back')
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 70%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    toggleIcon.children[1].classList.add('fa-moon');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    const currentTheme = localStorage.getItem('theme');
    console.log(currentTheme);
    imageMode('dark');
}

function imageMode(color) {
    image1.src = `/img/undraw_proud_coder_${color}.svg`
    image2.src = `/img/undraw_feeling_proud_${color}.svg`
    image3.src = `/img/undraw_conceptual_idea_${color}.svg`    
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 80%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 70%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    toggleIcon.children[1].classList.add('fa-sun');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    imageMode('light');
    const currentTheme = localStorage.getItem('theme');
    console.log(currentTheme);
}

//Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        darkMode();
    } else {
        lightMode();
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme)

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}