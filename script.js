let sizeBtn = document.createElement("button");
let container = document.querySelector(".container")

sizeBtn.classList = "btn"
sizeBtn.textContent = "Change grid size"

container.before(sizeBtn);

makeGrid(50);

sizeBtn.onclick = () => {
  let gridSize = prompt("Please input an integer 10 to 100 for grid size.");
  if (10 > gridSize > 100) {
    let gridSize = prompt("Whoops, looks like your number was too big or too small!\n" +
    "Please input an integer 10 to 100 for grid size.");
  }
  makeGrid(gridSize);
}

/* function clearGrid() {
  container.removeChild
}*/

function makeRows(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let divRow = document.createElement("div");
    container.appendChild(divRow);
    divRow.classList = "row";
  }
}

function makeCols(gridSize) {
  for (const divRow of document.querySelectorAll(".row")) {
    let i = 0;
    for (let k = 0; k < gridSize; k++) {
      let divCol = document.createElement("div");
      divRow.appendChild(divCol);
      divCol.classList = "col";
      divCol.id = `${k}, ${i}`;
    }
    i++;
  }
}

function makeGrid(gridSize) {
  makeRows(gridSize);
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

container.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = 'black';
})