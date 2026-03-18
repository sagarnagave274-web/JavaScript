function checkDivisibleByFive(num) {
  if (num % 5 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(checkDivisibleByFive(25));