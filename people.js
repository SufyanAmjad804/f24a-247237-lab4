const people = [];

function draw() {
  const tbody = document.getElementById("people");
  tbody.innerHTML = "";

  for (const person of people) {
    const { name, isIn } = person;   // read both from the same person together
    const tr = document.createElement("tr");
    for (const value of [name, isIn]) {
      const td = document.createElement("td");
      td.textContent = String(value);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  const inCount = people.filter(function (p) { return p.isIn === true; }).length;
  document.getElementById("count").textContent = "People in the shop: " + inCount;
}

function addPerson(isIn) {
  const nameBox = document.getElementById("name");
  if (nameBox.value === "") return;
  people.push({ name: nameBox.value, isIn: isIn });
  nameBox.value = "";
  draw();
}

document.getElementById("hereBtn").addEventListener("click", function () {
  addPerson(true);
});
document.getElementById("outBtn").addEventListener("click", function () {
  addPerson(false);
});

draw();