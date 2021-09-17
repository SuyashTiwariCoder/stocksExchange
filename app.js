let initialValue = document.querySelector("#initial-value");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#current-price");
let checkBtn = document.querySelector("#checkButton");
let output = document.querySelector("#outputDiv");

function checkProfitOrLoss(init, qty, cp) {
  if (init > cp) {
    let loss = (init - cp) * qty;
    let lossPercentage = (loss / init) * 100;
    showMessage1(
      `Sorry you occured a Loss in your investments Loss = ${loss} and Loss percentage = ${lossPercentage}%`
    );
  } else if (init < cp) {
    let profit = (cp - init) * qty;
    let profitPercentage = (profit / init) * 100;

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

  checkProfitOrLoss(init, qty, cp);
}
