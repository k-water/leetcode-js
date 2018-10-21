/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isValidBST = function (root) {
  return isValidNode(root, -Infinity, Infinity)

  function isValidNode(root, min, max) {
    if (!root) return true
    if (root.val <= min || root.val >= max) return false
    return isValidNode(root.left, min, root.val) && isValidNode(root.right, root.val, max)
  }
};