function checkEmpty(str) {
  if (str.length === 0) {
    return "Empty";
  } else {
    return "Not Empty";
  }
}

console.log(checkEmpty("Hello World!")); 
console.log(checkEmpty(""));             
console.log(checkEmpty("   "));          