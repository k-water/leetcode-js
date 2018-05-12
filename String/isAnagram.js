/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
  let temps = new Array(26).fill(0),
    tempt = new Array(26).fill(0)
  s.split('').forEach(v => temps[v.charCodeAt() - 97]++)
  t.split('').forEach(v => tempt[v.charCodeAt() - 97]++)
  for (let i = 0; i < 26; i++) {
    if (temps[i] !== tempt[i]) {
      return false
    }
  }
  return true
}
console.log(isAnagram("a", "b"))