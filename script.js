var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssDiv = document.querySelector("div");
var toolTip = document.querySelector("span");

css.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`;

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = `background: ${body.style.background};`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

cssDiv.addEventListener("click", () => {
    toolTip.innerHTML = "Copied!"
    navigator.clipboard.writeText(`${css.textContent}`);
})

cssDiv.addEventListener("mouseleave", () => {
    toolTip.innerHTML = "Click to copy!";
})