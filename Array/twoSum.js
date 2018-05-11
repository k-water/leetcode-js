/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    let val = target - nums[i]
    let pos = nums.indexOf(val, i + 1)
    if (pos > -1) {
      return [i, pos]
    }
  }
  return []
}
