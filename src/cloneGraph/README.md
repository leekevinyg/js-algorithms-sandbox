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

1. Store cloned nodes in a hashmap
2. Traverse the graph
    - If a node has not been cloned, clone it with an initial empty neighbors list
3. Examine the neighbors of the node from the step above. 
    - If the neighbors have not been cloned, clone them with an initial empty neighbors list and add them to the searchStack.
    - Add the cloned neighbors to the node created in step 2.
4. Return the cloned graph rooted at the start node.

**Time Complexity**

O(N) - each node in the input is processed once.

