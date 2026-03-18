function checkDisarium(num) {
  let digits = num.toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(Number(digits[i]), i + 1);
  }

  if (sum === num) {
    return "Disarium";
  } else {
    return "Not Disarium";
  }
}

let num = 175;

console.log(checkDisarium(num));