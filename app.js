let invoiceDate = new Date();
const todayDate = invoiceDate.toLocaleDateString();
const today = document.getElementById("show-date");
today.innerText = todayDate;

const detailButton = document.getElementById("detail-submit-btn");
detailButton.addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");
  const buyerInfo = document.getElementById("buyer-info");
  buyerInfo.innerText = buyerDetails.value;
  buyerDetails.value = "";
});

const addDetailsButton = document.getElementById("add-details-btn");
addDetailsButton.addEventListener("click", function () {
  const infoTable = document.getElementById("info-table");
  const nameInput = document.getElementById("item-name-input");
  const priceInput = document.getElementById("item-price-input");
  const quantityInput = document.getElementById("item-quantity-input");

  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  td3.classList.add("total-amount");

  th.innerText = nameInput.value;
  td1.innerText = priceInput.value;
  td2.innerText = quantityInput.value;

  const buyerPrice = td1.innerText;
  const buyerQuan = td2.innerText;
  td3.innerText = parseInt(buyerPrice) * parseInt(buyerQuan);

  // totalAmount

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  infoTable.appendChild(tr);
  totalCalculation();
});

function totalCalculation() {
  const totalSub = subTotalAmount();
  const subTotal = document.getElementById("sub-total");
  subTotal.innerText = totalSub;
  const taxAmount = document.getElementById("tax");

  const tax = totalSub * 0.2;
  taxAmount.innerText = tax.toFixed(2);

  const grandTotal = document.getElementById("grand-total");
  grandTotal.innerText = totalSub + tax;

  const total = (grandTotal.innerText = totalSub + tax);
  document.getElementById("grand-total-2").innerText = total;
}

function subTotalAmount() {
  let subAmountTotal = 0;
  const totalAmount = document.getElementsByClassName("total-amount");

  for (let i = 0; i < totalAmount.length; i++) {
    const element = totalAmount[i];
    const price = parseInt(element.innerText);

    subAmountTotal = subAmountTotal + price;
  }
  return subAmountTotal;
}
