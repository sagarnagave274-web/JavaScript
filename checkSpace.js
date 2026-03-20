function checkSpace(str) {
  if (str.includes(" ")) {
    return "Space";
  } else {
    return "No Space";
  }
}

console.log(checkSpace("Hello World"));