let initialValue = document.querySelector("#initial-value");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#current-price");
let checkBtn = document.querySelector("#checkButton");
let output = document.querySelector("#outputDiv");

function checkProfitOrLoss(init, qty, cp) {
let initV = init*qty;
let cpV = cp*qty;
  if (initV > cpV) {
    let loss = parseFloat((init - cp)*qty).toFixed(2) ;
    let lossPercentage = parseFloat(((init-cp)*100)/init).toFixed(2);
    showMessage1(
      `Sorry you occured a Loss in your investments Loss = ${loss} and Loss percentage = ${lossPercentage}%`
    );
  } else if (initV < cpV) {
    let profit = parseFloat((cp-init)*qty).toFixed(2)
    let profitPercentage = parseFloat(((cp-init) * 100)/init).toFixed(2)

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
  let init = Number(initialValue.value);
  let qty = Number(quantity.value);
  let cp = Number(currentPrice.value);
  isPositiveOrNot(init , qty , cp )
  
}


function isPositiveOrNot(init , qty , cp) {
 if (init==""||qty==""||cp=="") {
   alert("Please Enter all Values ")
 } else {
  checkProfitOrLoss(init,qty,cp)
 }}