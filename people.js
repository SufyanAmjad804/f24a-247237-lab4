const people = [];

document.getElementById("hereBtn").addEventListener("click", function () {
  const nameBox = document.getElementById("name");
  if (nameBox.value === "") return;
  people.push({ name: nameBox.value, isIn: true });    // Here: in the shop
  nameBox.value = "";
});

document.getElementById("outBtn").addEventListener("click", function () {
  const nameBox = document.getElementById("name");
  if (nameBox.value === "") return;
  people.push({ name: nameBox.value, isIn: false });   // Out: not in the shop
  nameBox.value = "";
});