/* create a grid of divs */
const GRID_CONTAINER = document.querySelector("#grid-container");
const GRID_CONTAINER_SIZE = 500; //pixel width of the container
let gridRow;
let divAdder;
let selectedColor = "green";
let slider = document.querySelector("#gridSize");
let gridSize = slider.value; //number of squares each side


/* create a div row, fill with divs then move on to next row */

function drawGrid(){
    gridSize = slider.value; //number of squares each side
    for (let i = 1; i <= gridSize; i++){
        gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");
        GRID_CONTAINER.appendChild(gridRow);

        for (let j = 1; j <= gridSize; j++){
            //loop through and create the divs for the row
            divAdder = document.createElement("div"); 
            let squareSize = ((GRID_CONTAINER_SIZE / gridSize) - 2) + "px";
            divAdder.style.width = squareSize; //(GRID_CONTAINER_SIZE / GRID_SIZE);
            divAdder.style.height = squareSize; //(GRID_CONTAINER_SIZE / GRID_SIZE);
            divAdder.setAttribute("class", "pixel");
            divAdder.addEventListener("mouseenter", (e) => {
              e.target.style.backgroundColor = selectedColor;});
            gridRow.appendChild(divAdder);

        }
    }
}


//set up remove button
redrawButton = document.querySelector("#redrawButton");
redrawButton.addEventListener("click", redrawGrid);


function redrawGrid (){
    GRID_CONTAINER.innerHTML = "";
    drawGrid();
}

//load the initial grid at 64
drawGrid(gridSize);
console.log(gridSize);