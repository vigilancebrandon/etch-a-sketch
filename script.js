let body = document.querySelector("body");
let btnsDiv = document.createElement("div");
let sizeBtn = document.createElement("button");
let clearBtn = document.createElement("button");
let container = document.querySelector(".container");

sizeBtn.classList = "btn";
sizeBtn.textContent = "Change grid size";
clearBtn.classList = "btn";
clearBtn.textContent = "Clear";

btnsDiv.id = "buttons-div";

container.before(btnsDiv);
btnsDiv.appendChild(sizeBtn);
btnsDiv.appendChild(clearBtn);

makeNewGrid(50);

function clearGrid() {
  for (const row of document.querySelectorAll(".row")) {
    row.remove();
  }
}

function makeRows(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    container.appendChild(row);
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

//Prevents coloring entire rows or entire container black, a bug from using event delegation
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
  if (input === null) {
    return;
  } else if (input > 100 || input < 2) {
    input = prompt("Invalid input, please try again:");
  } else {
    return input;
  }
}

sizeBtn.addEventListener("click", () => {
  let gridSize = getGridSize();
  makeNewGrid(gridSize);
})

clearBtn.addEventListener("click", clearGrid());