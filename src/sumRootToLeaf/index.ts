interface TreeNode {
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
}

const getPathSum = (parentMap, node) : number => {
    let tempStack = [];
    let currNode = node;
    // chase the parent to retrace path (note this path is backwards)
    while (currNode !== undefined) {
        tempStack.push(currNode.val);
        currNode = parentMap[currNode.id];
    }

    // reverse backwards path
    let pathValues = [];
    while (tempStack.length > 0) {
        pathValues.push(tempStack.pop());
    }

    return parseInt(pathValues.join(''));
}

export const sumNumbers = function(root) {
    // Enumerate all root-to-leaf paths.
    let pathSumsList = [];
    let frontierStack = [root];
    let parentMap = {};
    let nodeId = 0;

    while (frontierStack.length > 0) {
        let node = frontierStack.pop();
        if (node.id === undefined) {
            node.id = nodeId;
        }
        if (!node) continue;
        if (node.left === null && node.right === null) {
            // we've reached a child node, output current path sum
            const pathSum = getPathSum(parentMap, node);
            pathSumsList.push(pathSum);
            continue;
        }
        if (node.left) {
            nodeId++;
            node.left.id = nodeId;
            parentMap[nodeId] = node;
            frontierStack.push(node.left);
        }
        if (node.right) {
            nodeId++;
            node.right.id = nodeId;
            parentMap[nodeId] = node;
            frontierStack.push(node.right);
        }
    }

    let sum = 0;
    for (let i=0; i<pathSumsList.length; i++) {
        sum += pathSumsList[i];
    }
    
    return sum;
};

