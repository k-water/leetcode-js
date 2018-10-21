/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrder = function (root) {
  let res = [],
    queue = [],
    level = [],
    size, i, temp
  if (root === null) return res
  queue.push(root)
  while (queue.length) {
    level = []
    size = queue.length
    for (i = 0; i < size; i++) {
      temp = queue.shift()
      level.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    res.push(level)
  }
  return res
};