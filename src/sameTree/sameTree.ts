interface TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
};

const getDFSPath = (startNode : TreeNode) : string => {
    const path : number[] = [];
    const stack : TreeNode[] = [startNode];

    while (stack.length > 0) {
        const nextNode : TreeNode = stack.pop();

        if (nextNode === null) {
            path.push(null);
            continue;
        } 
        path.push(nextNode.val);
        if (nextNode.left === null && nextNode.right === null) {
            // we have reached a leaf node
            continue;
        }
        stack.push(nextNode.left);
        stack.push(nextNode.right);
    }
    return path.toString();
}

export const sameTree = (p : TreeNode, q: TreeNode) : boolean => {
    return getDFSPath(p) === getDFSPath(q);
}