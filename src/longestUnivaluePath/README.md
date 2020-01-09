<h3>Longest Univalue Path</h3>

**Question**

Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

The length of path between two nodes is represented by the number of edges between them.

<pre>
Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output: 2
</pre>

<pre>
Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5

Output: 2
</pre>

**Solution**
The longest path so far either:

        1) Includes the root (left and right nodes are equal to root)
        2) Is in the left tree
        3) Is in the right tree

        As we traverse the tree, we can increment a univalue path if either:

        1) node.val === node.left
        2) node.val === node.right

        We will keep a global of the longest path so far.


Time complexity: O(n)
Space comlexity: O(n)
