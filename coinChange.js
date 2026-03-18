function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;

  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }

  if (amount !== 0) {
    return -1;
  }

  return count;
}

let coins = [1, 2, 5];
let amount = 11;

console.log(coinChange(coins, amount));