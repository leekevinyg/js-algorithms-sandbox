interface ListNode {
    index? : number,
    val: number,
    next?: ListNode,
    prev?: ListNode,
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head : ListNode) : void {
    // list of length 0
    if (!head) return;
    // list of length 1
    if (head.next === null) return;

    // Traverse and make list doubly linked
    let prev : ListNode = null
    let curr : ListNode = head;
    let next : ListNode = null;
    let index : number = 0;
    while (curr !== null) {
        next = curr.next;
        curr.index = index;
        index++;
        curr.prev = prev;
        prev = curr;
        curr = next;
    }
    
    while (head.index < prev.index) {
        // save next
        next = head.next;
        // link head with tail and tail with the next thing after head
        head.next = prev;
        prev.next = next;
        // advance head and prev
        head = next;
        prev = prev.prev;
    }
    
    head.next = null;
    return;
};