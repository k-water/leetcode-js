/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  if (nums === null || !nums.length) return 0
  if (nums.length === 1) return nums[0]
  let last = nums[0],
    current = Math.max(nums[0], nums[1]),
    temp = 0

  for (let i = 2, len = nums.length; i < len; i++) {
    temp = current
    current = Math.max(last + nums[i], current)
    last = temp
  }
  return current
};