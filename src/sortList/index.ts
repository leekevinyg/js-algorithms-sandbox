interface IListNode {
    val: number,
    next?: ListNode,
}

class ListNode implements IListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var sortList = function(head : ListNode) : ListNode[] {
    // list of length 0
    if (!head) return null;
    
    // list of length 1
    if (head.next === null) return [head];
    
    let split = splitList(head);
    let rightSorted : ListNode[] = sortList(split.right); // this will be called up to lg n times
    let leftSorted : ListNode[] = sortList(split.left); // this will be called up to lg n times
    return mergeTwoLists(leftSorted, rightSorted); // this will be done n times
};

var splitList = function(head) {
    // list of length 0
    if (!head) return null;
    // list of length 1
    if (head.next === null) {
        return head;
    }
    // Initialize 2 pointers at the beginning of the list
    // Advance one pointer twice as fast as the slow pointer
    // When the fast pointer is at the end, the slow pointer will be in the middle.
    let fastPointer = head;
    let slowPointer = head;
    let slowPointerPrev = null;
    
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointerPrev = slowPointer;
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    
    slowPointerPrev.next = null;
    return {
        left: head,
        right: slowPointer
    }
};

var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null && l2) {
        return l2;
    }
    if (l2 === null && l1) {
        return l1;
    }
    
    let p1 = l1;
    let p2 = l2;
    let dummyHead : ListNode = new ListNode(null);
    let curr = dummyHead;
    
    while (p1 !== null && p2 !== null) {
        if (p1.val === p2.val) {
            curr.next = new ListNode(p1.val);
            curr.next.next = new ListNode(p1.val);
            curr = curr.next.next;
            p1 = p1.next;
            p2 = p2.next;
        } else if (p1.val < p2.val) {
            curr.next = new ListNode(p1.val);
            curr = curr.next;
            p1 = p1.next;
        } else if (p2.val < p1.val) {
            curr.next = new ListNode(p2.val);
            curr = curr.next;
            p2 = p2.next;
        }
    }
    
    if (p1 === null && p2) {
        curr.next = p2
    }
    
    if (p2 === null && p1) {
        curr.next = p1;
    }

    return dummyHead.next;
};