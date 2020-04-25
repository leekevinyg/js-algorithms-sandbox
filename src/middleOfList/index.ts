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
 */
var middleNode = function(head) {
    // list of length 0
    if (!head) return null;
    // list of length 1
    if (head.next === null) {
        return head;
    }
    // list of length 2
    if (head.next.next === null) {
        return head.next;
    }
    // Initialize 2 pointers at the beginning of the list
    // Advance one pointer twice as fast as the slow pointer
    // When the fast pointer is at the end, the slow pointer will be in the middle.
    let fastPointer = head;
    let slowPointer = head;
    
    while (fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    
    return slowPointer;
};