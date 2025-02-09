humbuger = document.querySelector(".humbuger");

humbuger.onclick = function(){
    navMenu=document.querySelector(".nav");
    humbuger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.humbuger.style.background = "red"
    
}

/* =================== toggle style switcher =================== */
function toggleTheme() {
    document.body.classList.toggle('body.fas.fa-moon');
}

function setActiveStyle(colorClass) {
    const colorElement = document.querySelector(`.${colorClass}`);
    const newColor = getComputedStyle(colorElement).backgroundColor;
    document.documentElement.style.setProperty('--skin-color', newColor);
}


const sIcon = document.getElementById("sicon");

sIcon.onclick = function(){
    let theme = document.querySelector(".Theme");
    theme.classList.toggle("display");
}
const moon = document.getElementById("moon");

moon.onclick = function(){
document.body.classList.toggle("mode")
}


