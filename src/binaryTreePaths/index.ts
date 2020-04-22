/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
export var binaryTreePaths = function(root) {
    let paths = [];
    var parent = {};

    const constructPath = (node) => {
        // constrcuts a path by following the input node up to it's parent until it doesn't change
        let path = [];
        let output = [node.val];

        while (node !== parent[node]) {
            path.push(node.val);
            node = parent[node];
        }
        
        while (path.length > 0) {
            output.push(path.pop());
        }
        paths.push(output);
    }
    
    parent[root] = root;
    let searchStack = [root];
    while (searchStack.length > 0) {
        let node = searchStack.pop();
        if (node.left === null && node.right === null) {
            // we've reached a leaf node, calculate path
            constructPath(node);
        }
        if (node.left) {
            parent[node.left] = node;
            searchStack.push(node.left);
        }
        if (node.right) {
            parent[node.right] = node;
            searchStack.push(node.right);
        }
    }
    return paths;
};