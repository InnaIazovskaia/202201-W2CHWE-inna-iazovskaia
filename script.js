const cells = document.querySelectorAll(".field__cell");
const resetGame = document.querySelector(".game__button_reset");
const startGame = document.querySelector(".game__button_start");
let fieldArray = [];
let cellsCount = 0;

function createField() {
  fieldArray = [];
  while (cellsCount < cells.length) {
    for (let i = 0; i < 14; i++) {
      const fieldArrayLine = [];
      for (let j = 0; j < 20; j++) {
        if (cells[cellsCount].style.background === "yellow") {
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
    document.getElementById(cell.id).style.background = "yellow";
  });
}

resetGame.addEventListener("click", () => {
  for (const cell of cells) {
    document.getElementById(cell.id).style.background = "#808080";
  }
});

startGame.addEventListener("click", createField);
