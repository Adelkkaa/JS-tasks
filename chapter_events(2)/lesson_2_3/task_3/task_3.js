const table = document.querySelector("table");

table.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Имя") {
    let sortedRows = Array.from(table.rows)
      .slice(1)
      .sort((rowA, rowB) => {
        if (rowA.cells[1].innerHTML > rowB.cells[1].innerHTML) {
          return 1;
        } else if (rowA.cells[1].innerHTML < rowB.cells[1].innerHTML) {
          return -1;
        } else {
          return 0;
        }
      });

    table.tBodies[0].append(...sortedRows);
  } else if (e.target.innerHTML === "Возраст") {
    let sortedRows = Array.from(table.rows)
      .slice(1)
      .sort((rowA, rowB) => rowA.cells[0].innerHTML - rowB.cells[0].innerHTML);

    table.tBodies[0].append(...sortedRows);
  }
});
