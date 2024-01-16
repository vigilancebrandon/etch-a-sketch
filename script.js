let container = document.querySelector(".container")

for (let i = 1; i <= 16; i++) {
  let divRow = document.createElement("div");
  container.appendChild(divRow);
  for (let i = 1; i <= 16; i++) {
    let divCol = document.createElement("div");
    divRow.appendChild(divCol);
    divCol.classList = "col";
  }
  divRow.classList = "row";
}
  