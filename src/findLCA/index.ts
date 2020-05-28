/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    root.level = 0;
    let stack = [root];
    let pFound = null;
    let qFound = null;
    
    while (stack.length !== 0) {
        let node = stack.pop();
        if (node.val === p.val) {
            pFound = node;
        }
        
        if (node.val === q.val) {
            qFound = node;
        }
        
        if (pFound && qFound) {
            if (pFound.level === qFound.level) {
                return findLCA(pFound, qFound);
            } else if (pFound.level > qFound.level) {
                while (pFound.level !== qFound.level) {
                    pFound = pFound.parent;
                }
                return findLCA(pFound, qFound);
            } else {
                while (qFound.level !== pFound.level) {
                    qFound = qFound.parent;
                }
                return findLCA(pFound, qFound);
            }
        }
    
        if (node.left) {
            node.left.parent = node;
            node.left.level = node.level + 1;
            stack.push(node.left)
        }
        if (node.right) {
            node.right.parent = node;
            node.right.level = node.level + 1;
            stack.push(node.right)
        }
    }
};

const findLCA = (pFound, qFound) => {
    if (pFound.val === qFound.val) return pFound;
    while (pFound !== qFound) {
        pFound = pFound.parent;
        qFound = qFound.parent;
        if (qFound === pFound) {
            return qFound;
        }
    }
}