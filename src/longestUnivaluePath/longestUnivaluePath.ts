interface TreeNode {
    val?: number,
    left: TreeNode,
    right: TreeNode, 
}

export const longestUnivaluePath = (node : TreeNode) : number => {
    if (node === null || node.left === null && node.right === null) {
        return 0;
    }

    return Math.max(
        longestUnivaluePath(node.left),
        longestUnivaluePath(node.right),
        straightUnivaluePath(node.left, node.val) + straightUnivaluePath(node.right, node.val)
    );
}

const straightUnivaluePath = (node : TreeNode, value : number) : number => {
    if (!node || node.val !== value) return 0;
    return Math.max(
        straightUnivaluePath(node.left, value), 
        straightUnivaluePath(node.right, value)
    ) + 1;
}