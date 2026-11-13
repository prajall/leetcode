var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  coins.forEach((c) => {
    for (let i = 0; i <= amount; i++) {
      if (i - c < 0) continue;

      dp[i] = Math.min(dp[i], 1 + dp[i - c]);
    }
  });

  return dp[amount] == amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
