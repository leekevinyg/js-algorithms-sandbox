const getDFSPath = (startNode) => {
    const path = [];
    const stack = [startNode];

    while (stack.length > 0) {
        const nextNode = stack.pop();

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

export const sameTree = (p, q) => {
    return getDFSPath(p) === getDFSPath(q);
}