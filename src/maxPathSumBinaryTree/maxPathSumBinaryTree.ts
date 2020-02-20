interface TreeNode {
    val?: number,
    right?: TreeNode,
    left?: TreeNode,
}

let maxSum = Number.NEGATIVE_INFINITY;
const maxGain = (node : TreeNode) : number => {
    if (!node) {
        return 0;
    }

    if (node.val > maxSum) {
        maxSum = node.val;
    }

    let leftGain = maxGain(node.left);
    let rightGain = maxGain(node.right);

    let newPath = node.val + leftGain + rightGain;
    maxSum = Math.max(maxSum, newPath);
    return node.val + Math.max(leftGain, rightGain);
}

export const maxPathSum = (root : TreeNode) : number => {
    maxGain(root);
    return maxSum;
}


