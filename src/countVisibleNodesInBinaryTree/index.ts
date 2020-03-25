/*

In a binary tree, if in the path from root to the node A, there is no node with greater value than A’s, this node A is visible. 
We need to count the number of visible nodes in a binary tree.

Example 1:

Input:
        5
     /     \
   3        10
  /  \     /
20   21   1

Output: 4
Explanation: There are 4 visible nodes: 5, 20, 21, and 10.
Example 2:

Input:
  -10
	\
	-15
	   \
	   -1

Output: 2
Explanation: Visible nodes are -10 and -1.

*/

interface TreeNode {
    val?: number,
    left: TreeNode,
    right: TreeNode, 
}

const countVisibleNodes = (node : TreeNode) : number => {
    let visible = [];
    const dfs = (node : TreeNode, maxValSoFar : number) => {
        if (!node) {
            return;
        }
        if (node.val > maxValSoFar) {
            visible.push(node);
            maxValSoFar = node.val;
        }
        dfs(node.right, maxValSoFar);
        dfs(node.left, maxValSoFar);
    }
    dfs(node, Number.NEGATIVE_INFINITY);
    return visible.length;
}
