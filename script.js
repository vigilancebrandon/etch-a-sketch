let container = document.querySelector(".container")

for (let i = 1; i <= 16; i++) {
  let subDiv = document.createElement("div");
  container.appendChild(subDiv);
  subDiv.classList = "subDiv";
}
  