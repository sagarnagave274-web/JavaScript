function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

let degrees = 90;

let radians = degreesToRadians(degrees);

let result = radians.toFixed(3);

console.log("Radians:", result);