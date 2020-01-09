interface TreeNode {
    val?: number,
    left?: TreeNode,
    right?: TreeNode
};

let longestPathSoFar = 0;
const longestUnivaluePath = (root : TreeNode) : number => {
    maxUnivalueLength(root);
    return longestPathSoFar;
}

const maxUnivalueLength = (node : TreeNode) : number => {
    if (node === null) {
        return 0;
    };

    let maxLeft = 0;
    let maxRight = 0;

    maxLeft = maxUnivalueLength(node.left);
    maxRight = maxUnivalueLength(node.right);

    if (node.left && node.left.val === node.val) {
        maxLeft = maxLeft + 1;
    }
    if (node.right && node.right.val === node.val) {
        maxRight = maxRight + 1;
    }
    longestPathSoFar = Math.max(longestPathSoFar, maxLeft + maxRight);
    return Math.max(maxLeft, maxRight);
}

export default longestUnivaluePath;



