/**
 * @param {TreeNode} root
 * @return {string[]}
 */

interface TreeNode {
    val: number,
    left?: TreeNode,
    right?: TreeNode,
    id?: number,
}

interface HashTable {
    hashes : { [id:number] : TreeNode  };
    id : number;
    put(key : TreeNode, val: TreeNode) : void,
    get(key : TreeNode) : TreeNode
}

class HashTable {
    constructor() {
        this.hashes = {};
        this.id = 0;
    }
    put(key : TreeNode, val : TreeNode) : void {
        if (key.id) {
            // update operation
            this.hashes[key.id] = val;
        } else {
            // new
            key.id = this.id;
            this.hashes[key.id] = val;
            this.id++;
        }
    }
    get(node : TreeNode) : TreeNode {
        return this.hashes[node.id];
    }
}

export var binaryTreePaths = function(root : TreeNode) : string[] {
    if (!root) {
        return [];
    }

    let paths = [];
    const parentHash = new HashTable();

    const constructPath = (node) => {
        // constrcuts a path by following the input node up to it's parent until it doesn't change
        let reversedPath = [];
        let path = [];

        while (node.id !== parentHash.get(node).id) {
            reversedPath.push(node.val);
            node = parentHash.get(node);
        }

        if (node.id === parentHash.get(node).id) {
            reversedPath.push(node.val);
        }
        
        while (reversedPath.length > 0) {
            path.push(reversedPath.pop());
        }
        paths.push(path.join("->"));
    }
    
    parentHash.put(root, root);
    let searchStack = [root];
    while (searchStack.length > 0) {
        let node = searchStack.pop();
        if (node.left === null && node.right === null) {
            // we've reached a leaf node, calculate path
            constructPath(node);
        }
        if (node.left) {
            parentHash.put(node.left, node);
            searchStack.push(node.left);
        }
        if (node.right) {
            parentHash.put(node.right, node);
            searchStack.push(node.right);
        }
    }
    return paths;
};