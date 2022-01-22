const cells = Array.from(document.querySelectorAll(".field__cell"));

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "#ff0";
  });
});
