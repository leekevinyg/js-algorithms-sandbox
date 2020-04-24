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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists : ListNode[]) {
    if (lists.length === 0) {
        return null;
    }
    
    if (lists.length === 1) {
        return lists[0];
    }
    
    while (lists.length >= 2) {
        let l1 = lists.pop();
        let l2 = lists.pop();
        let newList = mergeTwoLists(l1, l2);
        lists.push(newList);
    }
    return lists[0];
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
    let dummyHead = new ListNode(null);
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
