/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  let carry = 1
  let len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    if (carry === 0) {
      return digits
    }
    let tmp = digits[i] + carry
    carry = parseInt(tmp / 10)
    digits[i] = tmp % 10
  }

  // 最高位进位
  if (carry === 1) {
    let res = new Array(len + 1)
    res.fill(0)
    res[0] = 1
    return res
  }
  return digits
}
console.log(plusOne([9]))