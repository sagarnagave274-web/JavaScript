function addDashes(num) {
  return num.toString().split("").join("-");
}

let num = 12345;
console.log(addDashes(num));