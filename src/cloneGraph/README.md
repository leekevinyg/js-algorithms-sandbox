<h2>Clone Graph</h2>

**Question**

Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

<pre>
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
 </pre>

**Solution**

We will need to traverse the graph to clone it. But for this problem, we also need to think about how we want to represent relationships
between the nodes that we are exploring.

**Time Complexity**

O(V+E)

