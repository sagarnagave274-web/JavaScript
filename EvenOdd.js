function checkOddOrEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let num = 4;
console.log(checkOddOrEven(num));