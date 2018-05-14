/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  if (n <= 0) return -1
  let res = '1',
    str = ''
  let index,
    count,
    val
  for (let i = 1; i < n; i++) {
    index = 0
    str = ''
    while (index < res.length) {
      val = res.charAt(index)
      count = 0
      while (index < res.length && res.charAt(index) === val) {
        index++
        count++
      }
      str += count
      str += val
    }
    res = str
  }
  return res
}
console.log(countAndSay(5))