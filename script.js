let container = document.querySelector(".container")

let gridSize = 256

for (let i = 0; i < gridSize; i++) {
  let divRow = document.createElement("div");
  container.appendChild(divRow);
  for (let k = 0; k < gridSize; k++) {
    let divCol = document.createElement("div");
    divRow.appendChild(divCol);
    divCol.classList = "col";
    divCol.id = `${k}, ${i}`;
  }
  divRow.classList = "row";
  //divRow.id = `${i}`;
}

//let divCol = document.querySelectorAll(".col");

container.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = 'black';
  //console.log(event.target);
})
  