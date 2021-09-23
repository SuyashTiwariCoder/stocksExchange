let initialValue = document.querySelector("#initial-value");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#current-price");
let checkBtn = document.querySelector("#checkButton");
let output = document.querySelector("#outputDiv");

function checkProfitOrLoss(init, qty, cp) {
let initV = init*qty;
let cpV = cp*qty;
  if (initV > cpV) {
    let loss = (initV - cpV) * qty;
    let lossPercentage = (loss / initV) * 100;
    showMessage1(
      `Sorry you occured a Loss in your investments Loss = ${loss} and Loss percentage = ${lossPercentage}%`
    );
  } else if (initV < cpV) {
    let profit = (cpV - initV) * qty;
    let profitPercentage = (profit / initV) * 100;

    showMessage2(
      `Yayy!! you occured a Profit in your investments Profit = ${profit} and Profit percentage = ${profitPercentage}%`
    );
  } else showMessage3("no pain no gain ");
}
function showMessage1(message) {
  output.innerHTML = message;

  //   output.style.backgroundColor = 'red'
  output.style.borderRadius = "5rem";
  var object = document.body;
  object.style.backgroundColor = "red";
}

function showMessage2(message) {
  output.innerHTML = message;
  // output.style.backgroundColor = 'green'
  output.style.borderRadius = "5rem";
  var object = document.body;
  object.style.backgroundColor = "green";
}

function showMessage3(message) {
  output.innerHTML = message;
  // output.style.backgroundColor = 'white'
  output.style.borderRadius = "5rem";
  var object = document.body;
  object.style.backgroundColor = "white";
}

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  let init = initialValue.value;
  let qty = quantity.value;
  let cp = currentPrice.value;
  isPositiveOrNot(init , qty , cp )
  
}


function isPositiveOrNot(init , qty , cp) {
 if (init>0) {
   if (qty>0) {
   if (cp>0) {
     checkProfitOrLoss(init, qty, cp);
   } else {
    alert("Current Value  Can't be negative ")
     
   }
     
   } else {
   
    alert("Quantity  Can't be negative ")
   }
 } else {
  
   alert("Initial Value Can't be negative ")
 }
}