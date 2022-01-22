const cells = document.querySelectorAll(".field__cell");

for (const cell of cells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff0";
  });
}
