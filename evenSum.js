function makeEven(num1, num2) {
  let sum = num1 + num2;

  if (sum % 2 !== 0) {
    sum += 1;
  }

  return sum;
}

console.log(makeEven(4, 3)); 