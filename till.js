document.getElementById("takeBtn").addEventListener("click", function () {
  const bill = Number(document.getElementById("bill").value);
  const paid = Number(document.getElementById("paid").value);

  const change = getChange(bill, paid);   // the call sits above the function

  const result = document.getElementById("result");
  result.innerHTML = "";

  const lines = ["Change: " + change];

  if (bill > paid) {
    lines.push("Still owed: " + (bill - paid));
  }
  if (paid > bill) {
    lines.push("Half of the change: " + change / 2);
  }

  for (const text of lines) {
    const p = document.createElement("p");
    p.textContent = text;
    result.appendChild(p);
  }
});

function getChange(bill, paid) {
  return paid - bill;
}