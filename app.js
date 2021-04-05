var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var background=document.getElementById("gradient");

function generator(){
    background.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent=background.style.background;
}


color1.addEventListener("input",generator);
color2.addEventListener("input",generator);