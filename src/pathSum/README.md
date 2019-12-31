<h3>Path Sum</h3>

**Question**

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

<pre>
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
</pre>

**Solution**

1) Recursively explore the graph.
    - At each call, subtract ```node.val``` from the ```sum```
2) When we reach the goal node (node with no children), we check whether we have reached a ```sum``` of 0. If yes, then return true, otherwise false.

Edge cases: Null node

Time complexity: O(n), Space complexity (stack memory limited by recusion calls): O(n) if unbalanced, O(lg n) is balanced.