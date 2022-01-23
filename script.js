const cells = document.querySelectorAll(".field__cell");
const resetGame = document.querySelector(".game__button_reset");
const startGame = document.querySelector(".game__button_start");
let fieldArray = [];
let cellsCount = 0;
let newFieldArray = [];

function iCoordinateMinus(i) {
  let iChecked;
  if (i === 0) iChecked = 14;
  else iChecked = i;
  return iChecked;
}

function iCoordinatePlus(i) {
  let iChecked;
  if (i === 13) iChecked = -1;
  else iChecked = i;
  return iChecked;
}

function jCoordinateMinus(j) {
  let jChecked;
  if (j === 0) jChecked = 20;
  else jChecked = j;
  return jChecked;
}

function jCoordinatePlus(j) {
  let jChecked;
  if (j === 19) jChecked = -1;
  else jChecked = j;
  return jChecked;
}

function createNewField() {
  newFieldArray = [];
  for (let i = 0; i < 14; i++) {
    const newFieldArrayLine = [];
    for (let j = 0; j < 20; j++) {
      let neighbors = 0;
      if (fieldArray[iCoordinateMinus(i) - 1][j] === 1) neighbors++;
      if (fieldArray[i][jCoordinatePlus(j) + 1] === 1) neighbors++;
      if (fieldArray[iCoordinatePlus(i) + 1][j] === 1) neighbors++;
      if (fieldArray[i][jCoordinateMinus(j) - 1] === 1) neighbors++;
      if (fieldArray[iCoordinateMinus(i) - 1][jCoordinateMinus(j) - 1] === 1)
        neighbors++;
      if (fieldArray[iCoordinateMinus(i) - 1][jCoordinatePlus(j) + 1] === 1)
        neighbors++;
      if (fieldArray[iCoordinatePlus(i) + 1][jCoordinatePlus(j) + 1] === 1)
        neighbors++;
      if (fieldArray[iCoordinatePlus(i) + 1][jCoordinateMinus(j) - 1] === 1)
        neighbors++;
      if (fieldArray[i][j] === 0 && neighbors === 3) newFieldArrayLine.push(1);
      else if (fieldArray[i][j] === 1 && (neighbors < 2 || neighbors > 3))
        newFieldArrayLine.push(0);
      else newFieldArrayLine.push(fieldArray[i][j]);
    }
    newFieldArray.push(newFieldArrayLine);
  }
}

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
}

function startLife() {
  cellsCount = 0;
  while (cellsCount < cells.length) {
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 20; j++) {
        fieldArray[i][j] = newFieldArray[i][j];
        if (newFieldArray[i][j] === 1) {
          cells[cellsCount].style.background = "yellow";
        } else {
          cells[cellsCount].style.background = "#808080";
        }
        cellsCount++;
      }
    }
  }
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
startGame.addEventListener("click", createNewField);
startGame.addEventListener("click", startLife);
