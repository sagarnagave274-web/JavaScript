function removeSpecial(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
}

console.log(removeSpecial("He!!lo@ Wo#rld$%^&*()")); 