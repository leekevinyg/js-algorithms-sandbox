/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const countUnivalSubtrees = function(root) {
    // run DFS from each node. If all values are the same then increment count
    let count = 0;
    
    const is_univalue_subtree = (root) => {
        let stack = [root];
        while (stack.length > 0) {
            let node = stack.pop();
            if (node === null) {
                continue;
            }
            if (node.parent === null || node.parent === node.val) {
            } else {
                // not a univalue subtree
                return false;
            }
            if (node.left) {
                node.left.parent = node.val;
            }
            if (node.right) {
                node.right.parent = node.val;
            }
            stack.push(node.left);
            stack.push(node.right);
        }
        return true;
    }
    
    if (!root) return 0;
    root.parent = null;
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop();
        if (node === null) {
            continue;
        }
        node.parent = null;
        if (is_univalue_subtree(node)) {
            count++;
        }
        if (node.left) {
            node.left.parent = node.val;
        }
        if (node.right) {
            node.right.parent = node.val;
        }
        stack.push(node.right);
        stack.push(node.left);
    }
    return count;
}; 