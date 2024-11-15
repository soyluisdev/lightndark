
const currentTheme = localStorage.getItem('theme');
const toggleSwitch = document.querySelector('.light-dark');
const nav = document.querySelector('.menu-back')
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Is Light Mode

function toggleLightDarkMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 80%)' : 'rgb(0 0 0 / 50%)' ;
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 70%)' : 'rgb(255 255 255 / 70%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') :
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? document.documentElement.setAttribute('data-theme', 'light') :
    document.documentElement.setAttribute('data-theme', 'dark');
    isLight ? localStorage.setItem('theme', 'light') :
    localStorage.setItem('theme', 'dark');
    isLight ? imageMode('light') : imageMode('dark');
    console.log(currentTheme);
}



function imageMode(color) {
    image1.src = `/img/undraw_proud_coder_${color}.svg`
    image2.src = `/img/undraw_feeling_proud_${color}.svg`
    image3.src = `/img/undraw_conceptual_idea_${color}.svg`    
}

//Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        toggleLightDarkMode(true);
    } else {
        toggleLightDarkMode(false);
    }
}


//Event Listener
toggleSwitch.addEventListener('change', switchTheme)

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleLightDarkMode(false);
    
    if (currentTheme === 'light') {
        toggleSwitch.checked = false;
    }
}