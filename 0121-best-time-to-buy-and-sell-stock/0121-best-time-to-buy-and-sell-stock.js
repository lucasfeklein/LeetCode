/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  console.log(prices.slice(1));
  for (let sell of prices.slice(1)) {
    if (buy < sell) {
      profit = Math.max(sell - buy, profit);
    } else {
      buy = sell;
    }
  }
  console.log(profit);
  return profit;
};