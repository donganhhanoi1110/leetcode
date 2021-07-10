/**
 * 2. Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Time complexity : O(\max(m, n))O(max(m,n)). Assume that mm and nn represents the length of l1l1 and l2l2 respectively, the algorithm above iterates at most \max(m, n)max(m,n) times.
 * Space complexity : O(\max(m, n))O(max(m,n)). The length of the new list is at most \max(m,n) + 1max(m,n)+1.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined) ? 0 : val
    this.next = (next===undefined) ? null: next
}

var addTwoNumbers = function(l1, l2) {

    let dummy =new ListNode(0)
    let curr = dummy
    let carry = 0
    while (l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.val : 0
        let y = l2 !== null ? l2.val : 0
        let sum = carry + x + y
        carry = Math.floor(sum / 10)

        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next

        curr.next = new ListNode(sum % 10)
        curr = curr.next

    }
    if (carry > 0) {
        curr.next = new ListNode(carry)
    }
   return dummy.next
};

l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
console.log(addTwoNumbers(l1, l2))