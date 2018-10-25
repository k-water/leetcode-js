/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
  let prime = new Array(n).fill(1)
  for (let i = 2; i < n; i++) {
    if (prime[i]) {
      for (let j = i * 2; j < n; j += i) {
        prime[j] = 0
      }
    }
  }
  let res = 0
  for (let i = 2; i < n; i++) {
    if (prime[i]) res++
  }
  return res
};
console.log(countPrimes(999983))