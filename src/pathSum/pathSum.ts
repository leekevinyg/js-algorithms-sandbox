interface TreeNode {
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
}

const hasPathSum = (root : TreeNode, sum : number) : boolean {
    // Recursively explore graph
    // As we explore the graph keep subtracting a node.val from the sum
    // Once we reach the goal node (leaf), we check if our sum is at 0.
    if (!root) return false;
    sum -= root.val;
    
    if (root.left === null && root.right === null) {
        // we are the leaf, check sum
        return sum === 0;
    }
    
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};