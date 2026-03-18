function checkVote(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

let age = 21;
console.log(checkVote(age));