interface TreeNode {
    val: number,
    left: TreeNode,
    right: TreeNode,
}

const maxDepth = function(root : TreeNode) : number {
    let initialDepth : number = 0;
    let maxDepthSoFar : number = 0;

    const maxDepthHelper = function(node : TreeNode, level : number) {
        if (level > maxDepthSoFar) {
            maxDepthSoFar = level;
        }
    
        if (node.left) {
            maxDepthHelper(node.left, level);
        }
        if (node.right) {
            maxDepthHelper(node.right, level);
        }
    }

    maxDepthHelper(root, initialDepth);

    return maxDepthSoFar;
}

