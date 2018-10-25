/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
  if (n <= 0) return false
  while(n !== 1) {
    if (n % 3 !== 0) return false
    n = parseInt(n / 3)
  }
  return true
};