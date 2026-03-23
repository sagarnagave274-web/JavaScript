function repeatVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, (ch) => ch + ch);
}

console.log(repeatVowels("Hello Aaron")); 