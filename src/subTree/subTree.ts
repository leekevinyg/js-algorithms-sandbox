interface TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
};

const getDFSPath = (startNode : TreeNode) : string => {
    const path : number[] = [];
    const stack : TreeNode[] = [startNode];

    while (stack.length > 0) {
        const node : TreeNode = stack.pop();
        path.push(node ? node.val : null);
        if (node === null) {
            continue;
        }
        if (node.left === null && node.right === null) {
            // leaf node
            continue;
        }
        stack.push(node.left);
        stack.push(node.right);
    }
    return path.toString();
}

export const sameTree = (p : TreeNode, q: TreeNode) : boolean => {
    return getDFSPath(p) === getDFSPath(q);
}

export const subTree = (s : TreeNode, t: TreeNode) : boolean => {
    // walk s with dfs, at each node, check if the subtree is the same as t.
    if (sameTree(s, t)) {
        return true;
    }

    const queue : TreeNode[] = [s];
    while (queue.length > 0) {
        const node : TreeNode = queue.pop();
        if (node === null) {
            continue;
        }
        if (sameTree(node.left, t) || sameTree(node.right, t)) {
            return true;
        }
        queue.push(node.right);
        queue.push(node.left);
    }
    return false;
}

