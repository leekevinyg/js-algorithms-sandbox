<h3>Sum Root to Leaf Nodes</h3>

**Question**
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example 1:
<pre>
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
</pre>

Example 2:
<pre>
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
</pre>

**Solution 1**

- Do a DFS traversal using a hashmap of Node : ParentNode to keep track of
the path to a current node.

- When we arrive at a child node, reconstruct an array of it's path from our parent hashmap to form the "value" of that path.

- Push this number onto a list of path sums.

- Sum up and return all the path sums in our list of path sums.

Time complexity:

TODO


Space complexity: 

TODO