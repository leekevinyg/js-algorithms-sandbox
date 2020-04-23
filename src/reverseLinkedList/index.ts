interface Node {
    val: number,
    next?: Node,
}

export const reverseLinkedList = (head : Node) : Node => {
    // traverse the list and turn the pointers the other way.
    let prev : Node = null;
    let curr : Node = head;
    let next : Node = null;
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