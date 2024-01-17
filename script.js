let body = document.querySelector("body");
let btnsDiv = document.querySelector("#buttons-div");
let sizeBtn = document.querySelector("#size-button");
let clearBtn = document.querySelector("#clear-button");
let gridBox = document.querySelector("#grid-box");

function clearGrid() {
  for (const row of document.querySelectorAll(".row")) {
    row.remove();
  }
}

function makeRows(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    gridBox.appendChild(row);
    row.classList = "row";
  }
}

function makeCols(gridSize) {
  for (const row of document.querySelectorAll(".row")) {
    let i = 0;
    for (let k = 0; k < gridSize; k++) {
      let col = document.createElement("div");
      row.appendChild(col);
      col.classList = "col";
      col.id = `${k}, ${i}`;
    }
    i++;
  }
}

//Prevents coloring entire rows or entire gridBox black, a bug from using event delegation
function addListeners() {
  for (col of document.querySelectorAll(".col")) {
    col.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = getRandRGB();
    })
  }
}

function makeNewGrid(gridSize) {
  clearGrid();
  makeRows(gridSize);
  makeCols(gridSize);
  addListeners();
}

function getRandomInt(range) {
  return Math.floor(Math.random() * range);
}

function getRandRGB() {
  let r = getRandomInt(256); //0 to 255
  let g = getRandomInt(256);
  let b = getRandomInt(256);
  return `rgb(${r}, ${g}, ${b})`;
}

function getGridSize() {
  let input = prompt("Please input an integer 2 to 100 for grid size:");
  if (input === "") {
    return null;
  } else if (input > 100 || input < 2) {
    input = prompt("Invalid input, please try again:");
  } else {
    return input;
  }
}

sizeBtn.addEventListener("click", (event) => {
  let gridSize = getGridSize();
  if (gridSize === null) {
    event.preventDefault()
  }
  else {
    makeNewGrid(gridSize);
  }
})

clearBtn.addEventListener("click", clearGrid());

makeNewGrid(50);