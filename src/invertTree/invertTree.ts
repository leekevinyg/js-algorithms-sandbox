interface TreeNode {
    right?: TreeNode,
    left?: TreeNode
}

let invertTree = (root : TreeNode) => {
    if (root) {
        const rightNode : TreeNode = invertTree(root.right);
        const leftNode : TreeNode  = invertTree(root.left);
        root.left = rightNode;
        root.right = leftNode;
    }
    return root;
};