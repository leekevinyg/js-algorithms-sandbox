<h2>Subtree of Another Tree</h2>

**Question**

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

**Solution**

Run DFS through tree s. At each node, check if the tree rooted at that node is the same tree as t using the solution
presented in [sameTree](../sameTree/sameTree.ts).

**Time and Space Complexity**
TODO
