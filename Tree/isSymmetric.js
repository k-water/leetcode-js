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
let isSymmetric = function (root) {
  if (!root) return true
  let stack = [],
    p = root.left,
    q = root.right
  stack.push(p)
  stack.push(q)
  while (stack.length) {
    p = stack.pop()
    q = stack.pop()

    if (!p && !q) continue
    if (!p || !q) return false
    if (p.val !== q.val) return false

    stack.push(p.left)
    stack.push(q.right)
    stack.push(p.right)
    stack.push(q.left)
  }
  return true
};
// let isSymmetric = function (root) {
//   if (!root) return true
//   return isSymmetricNode(root.left, root.right)

//   function isSymmetricNode(left, right) {
//     if (!left && !right) return true
//     if (!left || !right) return false
//     return (left.val === right.val) && isSymmetricNode(left.left, right.right) && isSymmetricNode(left.right, right.left)
//   }
// };