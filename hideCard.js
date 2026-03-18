function hideCard(cardNumber) {
  return "************" + cardNumber.slice(12);
}

let cardNumber = "1234567890123456";

console.log(hideCard(cardNumber));