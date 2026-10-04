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

document.getElementById("addBtn").addEventListener("click", function () {
  const itemBox = document.getElementById("item");
  const quantityBox = document.getElementById("quantity");
  const priceBox = document.getElementById("price");

  // One object for this row
  const row = {
    item: itemBox.value,
    quantity: quantityBox.value,
    price: priceBox.value
  };
  row.line = row.quantity * row.price;   // the Line is quantity times price
  row.note = row.price + row.quantity;   // the price as text, with the quantity written on the end

  rows.push(row);   // put the object on the end of the array
  draw();           // draw the table again from the array

  // Empty the three boxes
  itemBox.value = "";
  quantityBox.value = "";
  priceBox.value = "";
});