/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function (nums) {
  if (nums === null || !nums.length) return null
  return recur(nums, 0, nums.length - 1)

  function recur(nums, start, end) {
    if (start > end) return null
    let mid = ~~((start + end) >> 1)
    let root = new TreeNode(nums[mid])
    root.left = recur(nums, start, mid - 1)
    root.right = recur(nums, mid + 1, end)
    return root
  }
};