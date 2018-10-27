/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function(n) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    res = res * 2 + (n & 1)
    n = parseInt(n / 2)
  }
  return res
};