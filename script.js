const cells = document.querySelectorAll(".field__cell");
const newGame = document.querySelector(".game__button_reset");

for (const cell of cells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff0";
  });
}

newGame.addEventListener("click", () => {
  for (const cell of cells) {
    document.getElementById(cell.id).style.background = "#808080";
  }
});
