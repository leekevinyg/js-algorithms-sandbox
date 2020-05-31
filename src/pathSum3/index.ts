/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) return 0;
    let occurenceMap = {
        0: 1,
    }
    let numPaths = 0;
    
    const dfs = (root, acc) => {
        if (root === null) {
            return;
        }
        acc+=root.val;
        if (occurenceMap[acc - sum] !== undefined) {
            console.log(occurenceMap);
            numPaths+=occurenceMap[acc-sum];
        }

        if (occurenceMap[acc] === undefined) {
            occurenceMap[acc] = 1;
        } else {
            occurenceMap[acc]++;
        }
        
        dfs(root.left, acc);
        dfs(root.right, acc);
    
        occurenceMap[acc]-=1;
        if (occurenceMap[acc] === 0) {
            delete occurenceMap[acc];
        }
    }
    
    dfs(root, 0);
    return numPaths;
};