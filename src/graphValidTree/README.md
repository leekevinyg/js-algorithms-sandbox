<h2>Graph Valid Tree</h2>

**Question**

Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

<pre>

Example 1:

Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true

Example 2:

Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
</pre>

**Solution**

A tree has:

1) n-1 edges
2) is a single connected component
3) is acyclic

Note detecting a cycle in an undirected graph is different than detecting a cycle in a directed graph.

For a directed graph

We simply check that all 3 of these cases hold and return true if they do, otherwise it's not a valid tree.