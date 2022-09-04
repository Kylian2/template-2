const hamburger = document.getElementById('hamburger');
const croix = document.getElementById('croix');
const menuDepliant = document.getElementById('menu-depliant');

hamburger.onclick = function (){
    menuDepliant.classList.toggle('inactive');
}

croix.onclick = function (){
    menuDepliant.classList.toggle('inactive');
}