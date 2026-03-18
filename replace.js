function replaceSmile(str) {
  return str.replaceAll(":)", ":(");
}

let input = ":) :) :) All smiles here :)";

console.log(replaceSmile(input));