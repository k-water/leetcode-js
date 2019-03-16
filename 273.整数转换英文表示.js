/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 *
 * https://leetcode-cn.com/problems/integer-to-english-words/description/
 *
 * algorithms
 * Hard (20.30%)
 * Total Accepted:    620
 * Total Submissions: 3K
 * Testcase Example:  '123'
 *
 * 将非负整数转换为其对应的英文表示。可以保证给定输入小于 2^31 - 1 。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: "One Hundred Twenty Three"
 *
 *
 * 示例 2:
 *
 * 输入: 12345
 * 输出: "Twelve Thousand Three Hundred Forty Five"
 *
 * 示例 3:
 *
 * 输入: 1234567
 * 输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 *
 * 示例 4:
 *
 * 输入: 1234567891
 * 输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven
 * Thousand Eight Hundred Ninety One"
 *
 */
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  let lessThan20 = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen'
  ]
  let tens = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
    'Hundred'
  ]
  let thousands = ['', 'Thousand', 'Million', 'Billion']
  function helper(num) {
    if (num == 0) {
      return ''
    } else if (num < 20) {
      return lessThan20[num % 20] + ' '
    } else if (num < 100) {
      return tens[parseInt(num / 10)] + ' ' + helper(num % 10)
    } else {
      return (
        lessThan20[parseInt(num / 100)] + ' Hundred ' + helper(num % 100)
      )
    }
  }
  if (num == 0) {
    return 'Zero'
  }
  let ret = '',
    pos = 0
  while (num > 0) {
    if (num % 1000 != 0) {
      ret = helper(num % 1000) + thousands[pos] + ' ' + ret
    }
    num = parseInt(num / 1000)
    pos++
  }
  return ret.trim()
}
console.log(numberToWords(123))
