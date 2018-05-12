/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function (s) {
  let sArr = s.split('')
  let times = {}
  sArr.forEach(v => {
    if (times[v]) {
      times[v]++
    } else {
      times[v] = 1
    }
  })
  for (let i = 0, len = sArr.length; i < len; i++) {
    if (times[sArr[i]] === 1) {
      return i
    }
  }
  return -1
}
console.log(firstUniqChar("loveleetcode"))