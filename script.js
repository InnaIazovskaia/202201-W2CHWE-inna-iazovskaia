const cells = document.querySelectorAll(".field__cell");
const resetGame = document.querySelector(".game__button_reset");
let fieldArray = [];
let cellsCount = 0;

function createField() {
  fieldArray = [];
  while (cellsCount < cells.length) {
    for (let i = 0; i < 14; i++) {
      const fieldArrayLine = [];
      for (let j = 0; j < 20; j++) {
        if (cells[cellsCount].style.background === "#ff0") {
          fieldArrayLine.push(1);
        } else {
          fieldArrayLine.push(0);
        }
        cellsCount++;
      }
      fieldArray.push(fieldArrayLine);
    }
  }
  return fieldArray;
}

for (const cell of cells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff0";
  });
}

resetGame.addEventListener("click", () => {
  for (const cell of cells) {
    document.getElementById(cell.id).style.background = "#808080";
  }
});
