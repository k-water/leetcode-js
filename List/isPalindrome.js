/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function (head) {
  if (head === null || head.next === null) return true
  let fast = head,
    slow = head

  // 找中点
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  let mHead = slow.next,
    mNewHead = null
  slow.next = null
  while (mHead !== null) {
    let tmp = mHead.next
    mHead.next = mNewHead
    mNewHead = mHead
    mHead = tmp
  }
  while (mNewHead !== null) {
    if (head.val !== mNewHead.val) return false
    head = head.next
    mNewHead = mNewHead.next
  }
  return true
};