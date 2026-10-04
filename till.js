document.getElementById("takeBtn").addEventListener("click", function () {
  const bill = Number(document.getElementById("bill").value);
    const paidText = document.getElementById("paid").value;
  const paid = paidText === "" ? null : Number(paidText);   // empty box stores null

  const change = getChange(bill, paid);   // the call sits above the function

  const result = document.getElementById("result");
  result.innerHTML = "";

  const lines = ["Change: " + change];
    if (paid === null) {
    lines.push("Kind of paid: " + typeof paid);
  }

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