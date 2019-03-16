/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.68%)
 * Total Accepted:    41.8K
 * Total Submissions: 168.9K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length
  if (len < 2) {
    return s
  }
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0)
  }
  let left = 0,
    right = 0
  for (let i = 1; i < len; i++) {
    dp[i][i] = 1
    for (let j = i - 1; j >= 0; j--) {
      dp[i][j] = s[i] === s[j] && (i - j == 1 || dp[i - 1][j + 1]) ? 1 : 0
      if (dp[i][j] && i - j > right - left) {
        right = i
        left = j
      }
    }
  }
  return s.substr(left, right - left + 1)
}
console.log(longestPalindrome('babad'))
