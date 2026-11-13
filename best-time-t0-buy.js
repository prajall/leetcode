var maxProfit = function (prices) {
  let L = 0;
  let R = 0;
  let profit = 0;

  for (R = 0; R < prices.length; R++) {
    const currentProfit = prices[R] - prices[L];
    if (currentProfit > profit) profit = currentProfit;
    if (prices[L] > prices[R]) L = R;
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
