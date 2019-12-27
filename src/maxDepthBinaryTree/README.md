<h3>Max Depth Binary Tree</h3>

**Question**

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

**Solution**

1) Keep track of the depth of the DFS traversal by recursively calling DFS with ```currentDepth + 1```.
2) At each iteration, if the passed in currentDepth exceeds the maxDepth encountered so far, increment maxDepth.
3) At the end, just return maxDepth.

This solution is O(n) time, as each node is only hit once, and O(n) space (example: worst case all nodes are on left side of the tree).