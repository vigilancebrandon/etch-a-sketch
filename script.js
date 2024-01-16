let sizeBtn = document.createElement("button");
let container = document.querySelector(".container")

sizeBtn.classList = "btn"
sizeBtn.textContent = "Change grid size"

container.before(sizeBtn);

makeNewGrid(50);

function clearGrid() {
  for (const row of document.querySelectorAll(".row")) {
    container.remove(row);
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
  makeRows(gridSize);
  console.log(document.querySelectorAll(".row").length)
  makeCols(gridSize);
}

/*function makeGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let divRow = document.createElement("div");
    for (let k = 0; k < gridSize; k++) {
      let divCol = document.createElement("div");
      divRow.appendChild(divCol);
      divCol.classList = "col";
      divCol.id = `${k}, ${i}`;
    }
    container.appendChild(divRow);
    divRow.classList = "row";
}}*/

sizeBtn.onclick = () => {
  let gridSize = prompt("Please input an integer 10 to 100 for grid size.");
  if (10 > gridSize > 100) {
    let gridSize = prompt("Whoops, looks like your number was too big or too small!\n" +
    "Please input an integer 10 to 100 for grid size.");
  }
  console.log(gridSize)
  clearGrid();
  makeNewGrid(gridSize);
}

container.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = 'black';
})

