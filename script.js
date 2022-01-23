const cells = document.querySelectorAll(".field__cell");
const resetGame = document.querySelector(".game__button_reset");
const fieldArray = [];

function creatField() {
  fieldArray = [];
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
