var css = document.querySelector("h3");
var input1 = document.querySelector(".inputcolor1");
var input2 = document.querySelector(".inputcolor2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
setGradient();

function setGradient(){
    body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
    css.textContent = body.style.background;
}

function randomColors(){
    input1.value = "#" + ((Math.floor(Math.random() * 16777215)).toString(16)).padStart(6, '0');
    input2.value = "#" + ((Math.floor(Math.random() * 16777215)).toString(16)).padStart(6, '0');
    setGradient();
}

input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);
button.addEventListener("click", randomColors);

