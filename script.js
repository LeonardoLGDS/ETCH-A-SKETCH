grid = document.querySelector("#container");

function show_value(x)
{
	
	removeAllChildNodes(document.querySelector("#container"));

	document.getElementById("slider_value").innerHTML = x;
  let gridSize = x;

  document.querySelector("#container").style.gridTemplateColumns = "";
  document.querySelector("#container").style.gridTemplateRows = "";

  document.querySelector("#container").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  document.querySelector("#container").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for(let i = 0; i < (gridSize * gridSize); i++) {
    moreSqr = document.createElement("div");
    moreSqr.classList.add("square"); 
    grid.appendChild(moreSqr);

    let squares = document.querySelectorAll(".square");

  /*   squares[i].onmouseover = () => {
    squares[i].style.backgroundColor = "black"
    }; */

    squares[i].onmouseover = () => {
    squares[i].style.backgroundColor = "black"
    };

  }
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
 	parent.removeChild(parent.firstChild);
	}
}
function eraseScreen() {
	let squares = document.querySelectorAll(".square");
  for(let i = 0; i < squares.length; i++) {
  	squares[i].style.backgroundColor = "white";
  }
}
