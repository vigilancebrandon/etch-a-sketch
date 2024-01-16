let container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
  let divRow = document.createElement("div");
  container.appendChild(divRow);
  for (let k = 0; k < 16; k++) {
    let divCol = document.createElement("div");
    divRow.appendChild(divCol);
    divCol.classList = "col";
    divCol.id = `${k}, ${i}`
  }
  divRow.classList = "row";
  divRow.id = `${i}`
}
  