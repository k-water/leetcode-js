/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @description 双指针法
 */
let removeNthFromEnd = function (head, n) {
  if (head === null) {
    return null
  }
  let fast = head,
    slow = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  if (fast === null) {
    return head.next
  }
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
}