function moveZeros(arr) {
  let result = [];
  let zeros = [];

  for (let num of arr) {
    if (num === 0) {
      zeros.push(num);
    } else {
      result.push(num);
    }
  }

  return result.concat(zeros);
}

let arr = [10, 0, 5, 20, 0, 12, 0];

console.log(moveZeros(arr));