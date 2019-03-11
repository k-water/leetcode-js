/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 *
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (42.08%)
 * Total Accepted:    1.9K
 * Total Submissions: 4.4K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 *
 * 示例 1:
 *
 *
 * 输入:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出: 3
 * 解释:
 * 长度最长的公共子数组是 [3, 2, 1]。
 *
 *
 * 说明:
 *
 *
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let aLen = A.length,
    bLen = B.length
  let dp = new Array(aLen)
  for (let i = 0; i < aLen; i++) {
    dp[i] = new Array(bLen).fill(0)
  }
  let max = 0
  for (let i = 0; i < aLen; i++) {
    for (let j = 0; j < bLen; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = A[i] === B[j] ? 1 : 0
      } else if (A[i] === B[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      max = Math.max(dp[i][j], max)
    }
  }
  return max
}
console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]))
