interface TreeNode {
    val?: number,
    left?: TreeNode,
    right?: TreeNode
};

let longestSoFar = 0;

const longestUnivaluePath = (root : TreeNode) : number => {
    longestUnivaluePathHelper(root, 0);
    return longestSoFar;
}

const longestUnivaluePathHelper = (node : TreeNode, longestPathSoFar : number) : number => {
    if (!node) {
        if (longestPathSoFar > longestSoFar) {
            longestSoFar = longestPathSoFar;
        }
    }
    if (node.left === null && node.right === null) {
        if (longestPathSoFar > longestSoFar) {
            longestSoFar = longestPathSoFar;
        }
    }
    if (node.left) {
        if (node.val === node.left.val) {
            return longestUnivaluePathHelper(node.left, longestPathSoFar + 1);
        } else {
            return longestUnivaluePathHelper(node.left, 0);
        }
    }
    if (node.right) {
        if (node.val === node.right.val) {
            return longestUnivaluePathHelper(node.right, longestPathSoFar + 1);
        } else {
            return longestUnivaluePathHelper(node.right, 0);
        }
    }
}

export default longestUnivaluePath;