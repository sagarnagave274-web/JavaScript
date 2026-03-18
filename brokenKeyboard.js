function countWords(str, brokenLetter) {
  let words = str.split(" ");
  let count = 0;

  for (let word of words) {
    if (!word.toLowerCase().includes(brokenLetter.toLowerCase())) {
      count++;
    }
  }

  return count;
}

let str = "hello world";
let brokenLetter = "d";

console.log(countWords(str, brokenLetter));