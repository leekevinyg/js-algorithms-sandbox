interface IListNode {
    val?: number,
    next?: ListNode,
}

class ListNode implements IListNode {
    index? : number;
    val? : number;
    next? : ListNode;

    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

var removeNthFromEnd = function(head : ListNode, n : number) {
    if (!head) {
        return null;
    }

    let dummyHead : ListNode = new ListNode(null);
    let curr : ListNode = dummyHead;
    curr.next = head;
    
    let index : number = 0;
    while (curr !== null) {
        curr.index = index;
        index++;
        curr = curr.next;
    }
    
    let lengthOfList : number = index - 1;
    let pointerToUpdate : number = lengthOfList - n;
    curr = dummyHead;
    while (curr !== null) {
        if (curr.index === pointerToUpdate) {
            curr.next = curr.next.next;
            break;
        }
        curr = curr.next;
    }    
    return dummyHead.next;
};