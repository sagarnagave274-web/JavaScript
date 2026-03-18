function checkPassOrFail(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}

let marks = 45;
let result = checkPassOrFail(marks);

console.log("Result:", result);