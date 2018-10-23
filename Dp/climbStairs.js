/**
 * @param {number} n
 * @return {number}
 */
// let mem = new Map()
// let climbStairs = function(n) {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   if(mem.has(n)) {
//     return mem.get(n)
//   }
//   let ret = climbStairs(n - 1) + climbStairs(n - 2)
//   mem.set(n, ret)
//   return ret
// }
let climbStairs = function (n) {
  let res = [1, 1]
  for (let i = 1; i < n; i++) {
    let temp = res[1]
    res[1] += res[0]
    res[0] = temp
  }
  return res[1]
}