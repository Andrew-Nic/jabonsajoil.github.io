document.getElementById("menu").addEventListener("click",mostrarMenu);
document.getElementById("back_menu").addEventListener("click",ocultarMenu);
nav = document.getElementById("nav");
bgMenu = document.getElementById("back_menu");

function mostrarMenu(){
    nav.style.right = "0px"
    bgMenu.style.display = "block";
}
function ocultarMenu(){
    nav.style.right = "-250px"
    bgMenu.style.display = "none";
}