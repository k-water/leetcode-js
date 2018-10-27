/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = function(x, y) {
  let res = x ^ y,
    dist = 0

  while(res) {
    dist++
    res &= res - 1
  }
  return dist
};