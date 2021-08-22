

grid = document.querySelector("div");

for(let i = 0; i < (16 * 16); i++) {
	moreSqr = document.createElement("div");
	moreSqr.classList.add("square");
	grid.appendChild(moreSqr);
}


document.querySelector("div.square").onmouseover = function() {mouseOver()};
document.querySelector("div.square").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.querySelector("div.square").style.backgroundColor = "black";
}

function mouseOut() {
  document.querySelector("div.square").style.backgroundColor = "white";
}
