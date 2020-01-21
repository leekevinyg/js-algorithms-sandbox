<h3>Maximum Path Sum Binary Tree</h3>

**Question**

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example:

<pre>
Input: [1,2,3]

       1
      / \
     2   3

Output: 6
</pre>

<pre>
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
</pre>

**Solution**

Return the maximum path sum either:

1) Is in the left subtree
2) Is in the right subtree
3) Goes through the root