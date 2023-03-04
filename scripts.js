var colores = document.querySelectorAll("input");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

var color1 = colores[0];
var color2 = colores[1];

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
