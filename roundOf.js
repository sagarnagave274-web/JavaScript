function roundNumber(num, ndigits) {
    return num.toFixed(ndigits);
}

let num = 0.778899;
let ndigits = 2;

let result = roundNumber(num, ndigits);

console.log("Rounded Result:", result);