/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
let containsDuplicate = function(nums) {
  return nums.some((item, index) => {
    return nums.indexOf(item) !== index
  })
}
*/

let containsDuplicate = function(nums) {
  return nums.sort().some((item, index, array) => {
    return !(!index || item !== array[index - 1])
  })
}