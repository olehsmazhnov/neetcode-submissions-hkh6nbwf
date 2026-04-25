/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // null -> 0 -> 1 -> 2 -> 3 -> null

        let [prev, cur, next] = [null, head, null];

        while(cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;        
        }

        return prev;
    }
}
