function checkRange(num, lowerLimit, upperLimit) {
  if (num >= lowerLimit && num <= upperLimit) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(checkRange(10, 1, 10));