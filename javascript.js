const heading = document.createElement('h1');
heading.textContent = "Etch-A-Sketch";
heading.style.fontFamily = "arial, sans ";
heading.style.textAlign = "center";
document.body.appendChild(heading);

const newDiv = document.createElement('div');
newDiv.setAttribute("id", "container");
newDiv.classList.add("sketch-area");
document.body.appendChild(newDiv); 

const grid = 600;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector('.sketch-area');
sketchArea.style.width = `${grid}px`;
sketchArea.style.height = `${grid}px`;

function boxBackgroundColor () {
    this.style.backgroundColor = "#000000";
}

function createGrid (){
    for(let i = 0; i < (rows * cols); i++){
        const gridCells = document.createElement('div');
        gridCells.style.width = `${(grid / cols) - 2}px`;
        gridCells.style.height = `${(grid / rows) - 2}px`;
        gridCells.classList.add('box');
        sketchArea.appendChild(gridCells);
        gridCells.addEventListener("mouseover", boxBackgroundColor)
    }
}
createGrid();

const scale = document.createElement('div');
scale.classList.add("scale-container");
document.body.appendChild(scale);

const input = document.createElement('input');
input.setAttribute("type", "range");
input.setAttribute("min", 1);
input.setAttribute("max", 100);
input.setAttribute("value", 16);
input.setAttribute("name", "reset")
input.classList.add("user-input");
input.textContent = "User Input";
scale.appendChild(input);

const reset = document.createElement('input');
reset.setAttribute("type", "button");
reset.textContent = "Reset";
scale.appendChild(reset);


function clearGrid() {
    const gridSize = prompt(
    "How many squares per side?"
    );

    if(gridSize >= 1 && gridSize <= 100) {
        while(scale.hasChildNodes) {
           ;

        }
        newDiv(gridSize);
    }
    else {
        alert("Choose a number between 1-100");
        clearGrid();
    }
}

const button = document.createElement('button');
button.textContent = "Reset";
button.classList.add("btn1");
document.body.appendChild(button);

button.addEventListener("click", clearGrid);
