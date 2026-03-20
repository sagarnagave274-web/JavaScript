function findInterval(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

console.log(findInterval([5, 2, 9, 1])); 
console.log(findInterval([7]));          