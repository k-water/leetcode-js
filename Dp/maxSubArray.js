/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    if (nums === null || !nums.length) return 0
    let res = -Infinity, temp = 0
    for (let index = 0; index < nums.length; index++) {
      if (temp < 0) temp = 0
      temp += nums[index]
      res = Math.max(temp, res)
    }
    return res
};
console.log(maxSubArray([-2,-1]))