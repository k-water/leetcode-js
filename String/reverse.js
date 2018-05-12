/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let flag = x > 0 ? true : false
  x = x + ''
  let res = parseInt(x.split('').reverse().join(''))
  if (res > Math.pow(2, 31) - 1) {
    return 0
  } else {
    return flag ? res : -res
  }
}
console.log(reverse(3147483647))