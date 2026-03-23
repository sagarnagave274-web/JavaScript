function largestBySwap(num) {
  let digits = num.toString().split('');
  let maxNum = num;

  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      let temp = [...digits];

  
      [temp[i], temp[j]] = [temp[j], temp[i]];

      let newNum = parseInt(temp.join(''));

      if (newNum > maxNum) {
        maxNum = newNum;
      }
    }
  }

  return maxNum;
}

console.log(largestBySwap(2736));