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

A streak is alive and can be incremented if a node's neighbors contain the same value as the node.
Store a hashmap of a node's streak and return the max value found.

Time complexity: O(n)
Space comlexity: O(n)

Problem: There can be 2 distinct uni value paths of the same value.

