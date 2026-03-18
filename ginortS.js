function ginortS(str) {
  let lower = "";
  let upper = "";
  let odd = "";
  let even = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
      lower += ch;
    } 
    else if (ch >= 'A' && ch <= 'Z') {
      upper += ch;
    } 
    else if (ch % 2 == 1) {
      odd += ch;
    } 
    else {
      even += ch;
    }
  }

  lower = lower.split("").sort().join("");
  upper = upper.split("").sort().join("");
  odd = odd.split("").sort().join("");
  even = even.split("").sort().join("");

  return lower + upper + odd + even;
}

let input = "Sorting4321";

console.log(ginortS(input));
