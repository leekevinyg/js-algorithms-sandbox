export const levelOrder = function(root) {
    root.level = 0;
    let queue = [root];
    let result = [];
    let currentResult = [];
    let currentLevel = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        if (!node) continue;
        if (currentLevel === node.level) {
            currentResult.push(node.val);
        } else {
            result.push(currentResult);
            currentLevel = node.level;
            currentResult = [];
            currentResult.push(node.val);
        }
        if (node.left) {
            node.left.level = node.level + 1;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.level = node.level + 1;
            queue.push(node.right);
        }
    }
    result.push(currentResult);
    return result;
};