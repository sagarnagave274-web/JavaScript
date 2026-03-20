function checkProfitOrLoss(sellingPrice, costPrice) {
  let result = sellingPrice - costPrice;

  if (result > 0) {
    return "Profit";
  } else if (result < 0) {
    return "Loss";
  } else {
    return "Break-even";
  }
}

console.log(checkProfitOrLoss(50, 30));   // Profit
console.log(checkProfitOrLoss(100, 150)); // Loss