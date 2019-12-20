<h2>Number of Connected Components in an Undirected Graph</h2>

**Question**

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

<pre>
Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4 

Output: 2
</pre>

**Solution**

Add the edges to a graph and run DFS from each node, marking all visited nodes along the way. Each DFS invocation, increment
the connected component counter by 1. Return the final count once all nodes have been visited.

**Time Complexity**

O(V+E)

**Resources**

[Graph Representation](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs)