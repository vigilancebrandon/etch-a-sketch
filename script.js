let sizeBtn = document.createElement("button");
let container = document.querySelector(".container")

sizeBtn.classList = "btn"
sizeBtn.textContent = "Change grid size"

container.before(sizeBtn);

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

function makeNewGrid(gridSize) {
  clearGrid();
  makeRows(gridSize);
  makeCols(gridSize);
  addListeners();
}

function addListeners() {
  for (col of document.querySelectorAll(".col")) {
    col.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = 'black';
    })
  }
}

sizeBtn.onclick = () => {
  let gridSize = prompt("Please input an integer 10 to 100 for grid size:");
  if (gridSize > 100 || gridSize < 10) {
    gridSize = prompt("Invalid input, please try again:");
  }
  makeNewGrid(gridSize);
}