<h3>Invert a binary tree</h3>

**Question**

Invert a binary tree.

Example:

<pre>
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
</pre>

**Solution**

Recursively invert the tree using DFS. ```O(n)``` time since every node is touched once. 

For space, if tree is unbalanced (one straight line), then the space complexity is ```O(n)```.

If the tree is balanced, the max height (and thus max recursion stack) will be ```O(lg N)```.
