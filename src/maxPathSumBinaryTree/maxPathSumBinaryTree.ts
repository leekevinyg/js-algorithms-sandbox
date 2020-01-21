interface TreeNode {
    val?: number,
    right?: TreeNode,
    left?: TreeNode,
}

export const maxPathSum = (root : TreeNode) : number => {
    if (!root) return 0;
    return Math.max(
        root.val,
        root.val + maxPathSum(root.left) + maxPathSum(root.right),
        root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right)),
        Math.max(maxPathSum(root.left), 0),
        Math.max(maxPathSum(root.right), 0),
    );
}