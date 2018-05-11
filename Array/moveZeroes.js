/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
  // if (nums.every(v => v)) {
  //   return
  // }
  let fast = 0,
    slow = 0
  let len = nums.length
  while (fast < len) {
    if (nums[fast] != 0) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  nums.fill(0, slow)
}
console.log(moveZeroes([0, 1, 0]))