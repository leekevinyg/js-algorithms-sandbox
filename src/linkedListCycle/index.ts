interface HashTable {
    hashes : {[id : number] : boolean},
    id : number,
    put(node : LinkedListNode) : void,
    get(node : LinkedListNode) : boolean,
}

interface LinkedListNode {
    val: number,
    next?: LinkedListNode,
}

class HashTable {
    constructor() {
        this.hashes = {};
        this.id = 0;
    }
    put(node) {
        if (node.id) {
            this.hashes[node.id] = true;
        } else {
            node.id = this.id;
            this.hashes[node.id] = true;
            this.id++;
        }
    }
    get(keyNode) {
        return this.hashes[keyNode.id];
    }
}

var hasCycle = function(head : LinkedListNode) : boolean {
    if (!head) return false;
    // maintain a hashmap of seen nodes
    let seenNodes : HashTable = new HashTable();
    // traverse the list, if we see a node we have seen before then there is a cycle
    while (head.next !== null) {
        if (seenNodes.get(head)) {
            return true;
        } else {
            seenNodes.put(head);
        }
        head = head.next;
    }
    return false;
};