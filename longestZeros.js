function longestZeros(str) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }

  return max;
}

console.log(longestZeros("1010010001"));