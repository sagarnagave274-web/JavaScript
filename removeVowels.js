function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowels("Orange juice")); 