/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let res = 0
  nums.forEach(item => {
    res ^= item
  })
  return res
}

console.log(singleNumber([4,1,2,1,2]))