/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 先缓存next 再向后移动head
 */
let reverseList = function(head) {
    let newHead = null
    while(head !== null) {
      let next = head.next
      head.next = newHead
      newHead = head
      head = next
    }
    return newHead
};
