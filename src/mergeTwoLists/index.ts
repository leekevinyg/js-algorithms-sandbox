interface IListNode {
    val?: number,
    next?: ListNode,
}

class ListNode implements IListNode {
    val? : number;
    next? : ListNode;

    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

export const mergeTwoLists = function(l1 : ListNode, l2 : ListNode) : ListNode {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null && l2) {
        return l2;
    }
    if (l2 === null && l1) {
        return l1;
    }
    
    let p1 : ListNode = l1;
    let p2 : ListNode = l2;
    let dummyHead : ListNode = new ListNode(null);
    let curr : ListNode = dummyHead;
    
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