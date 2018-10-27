/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function(n) {
  let res = 0
  while(n > 0) {
    if (n & 1 === 1) {
      res++
    }
    n = parseInt(n / 2)
  }
  return res
};
console.log(hammingWeight(2147483648))