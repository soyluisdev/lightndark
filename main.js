

const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Switch Theme
function switchTheme(event){
    console.log(event);
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);