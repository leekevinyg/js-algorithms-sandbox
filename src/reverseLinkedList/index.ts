export const reverseLinkedList = (head) => {
    // traverse the list and turn the pointers the other way.
    let prev = null;
    let curr = head;
    let next = null;
    while (curr !== null) {
        // save the next item we need to move to
        next = curr.next;
        // reverse the pointer
        curr.next = prev;
        // move to our new positions
        prev = curr;
        curr = next;
    }
    return prev;
}