/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  if (prices === null || !prices.length) return 0
  let res = 0, sum = 0
  for (let index = 1; index < prices.length; index++) {
    sum += prices[index] - prices[index - 1];
    res = Math.max(res, sum)
    sum = Math.max(0, sum)
  }
  return res
};