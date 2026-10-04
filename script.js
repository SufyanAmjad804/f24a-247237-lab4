// All rows live in this one array. It starts empty.
const rows = [];

const tbody = document.getElementById("rows");

function draw() {
  tbody.innerHTML = "";
  for (const row of rows) {
    const tr = document.createElement("tr");
    const cells = [row.item, row.quantity, row.price, row.line, row.note];
    for (const value of cells) {
      const td = document.createElement("td");
      td.textContent = String(value);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}
function showSummary() {
  let total = 0;
  for (const row of rows) {
    // NaN still counts as a number type, so it needs its own check
    if (typeof row.line === "number" && !Number.isNaN(row.line)) {
      total += row.line;
    }
  }

  document.getElementById("total").textContent = "Total: " + total;
  document.getElementById("totalKind").textContent = "Kind of total: " + typeof total;

  // The row just added is the last one in the array
  const last = rows[rows.length - 1];
  const priceAsNumber = Number(last.price);

  document.getElementById("noteKind").textContent =
    "Kind of the Note on the row just added: " + typeof last.note;
  document.getElementById("priceMatch").textContent =
    "Price text matches price as a number (==): " + (last.price == priceAsNumber);
  document.getElementById("sameKind").textContent =
    "Same kind (===): " + (last.price === priceAsNumber);

  // Only shown when the Line is NaN
  document.getElementById("lineKind").textContent =
    Number.isNaN(last.line) ? "Kind of that Line: " + typeof last.line : "";
}

document.getElementById("addBtn").addEventListener("click", function () {
  const itemBox = document.getElementById("item");
  const quantityBox = document.getElementById("quantity");
  const priceBox = document.getElementById("price");

  // One object for this row
    // One object for this row
  const row = {};
  if (itemBox.value !== "") {
    row.item = itemBox.value;   // an empty box means the object has no item at all
  }
  row.quantity = quantityBox.value;
  row.price = priceBox.value;
  row.line = row.quantity * row.price;   // the Line is quantity times price
  row.note = row.price + row.quantity;   // the price as text, with the quantity written on the end

    rows.push(row);   // put the object on the end of the array
  draw();           // draw the table again from the array
  showSummary();    // total and kinds          // draw the table again from the array

  // Empty the three boxes
  itemBox.value = "";
  quantityBox.value = "";
  priceBox.value = "";
});