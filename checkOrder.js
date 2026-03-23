function checkOrder(str) {
  let sorted = str.split('').sort().join('');

  if (str === sorted) {
    return "Ordered";
  } else {
    return "Unordered";
  }
}

console.log(checkOrder("abcde")); 
console.log(checkOrder("edcba")); 