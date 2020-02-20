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

There are 4 scenerios we will need to consider:

1) Entire Tree

<pre>

       1
      / \
     2   3

</pre>

2) Right subtree

<pre>

   -10
   / \
  9  20
    /  \
   15   7

</pre>

3) Left subtree

<pre>
   -10
   / \
  20  9
 /  \
15   7
</pre>

4) Straight line path

<pre>
    15
   / \
  20  9
 /  \
15   7

</pre>