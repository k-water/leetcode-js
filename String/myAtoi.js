/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function (str) {
  if (str.length === 0) return 0
  let INT_MAX = Math.pow(2, 31) - 1,
    INT_MIN = -INT_MAX - 1
  let len = str.length,
    sign = 1,
    base = 0,
    i = 0
  while (i < len && str[i] === ' ') ++i
  if (str[i] === '+' || str[i] === '-') {
    sign = (str[i++] === '+') ? 1 : -1
  }
  while (i < len && /\d/g.test(str[i])) {
    if (base > parseInt(INT_MAX / 10) || (base === parseInt(INT_MAX / 10) && parseInt(str[i]) > 7)) {
      return sign === 1 ? INT_MAX : INT_MIN
    }
    base = 10 * base + parseInt(str[i++])
  }
  return base * sign
}
console.log(myAtoi("2147483648"))