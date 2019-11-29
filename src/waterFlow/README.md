<h2>Pacific Atlantic Water Flow</h2>

**Question**

Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.

Example:

Given the following 5x5 matrix:
<pre>

  Pacific ~   ~   ~   ~   ~  
       ~  1   2   2   3  (5) *  
       ~  3   2   3  (4) (4) *  
       ~  2   4  (5)  3   1  *  
       ~ (6) (7)  1   4   5  *  
       ~ (5)  1   1   2   4  *  
          *   *   *   *   * Atlantic  
</pre>

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

**Solution 1**

Run DFS from each node in the graph, only adding neighbors into the search frontier if they meet the flow (height) requirements. If the graph reaches BOTH the atlantic and pacific ocean roots, then add it to our list of grid coordinates that we will return.

**Solution 1 Time Complexity**

O(n^2), where n is the number of nodes. Each time we run DFS from a node, we touch every node a maximum of once. Since we run BFS for every node, this solution is O(n^2).

**Solution 2**

Instead of doing DFS from every node, we just do DFS from the nodes that border each ocean. The search then "flows in" from each of the ocean nodes to the land nodes. We keep track of nodes that are accessible from each of the two respective oceans in separate 2D ```visited``` boolean arrays. Once we have completed our DFS searchs, we simply iterate through the nodes and return the position of any nodes that have been visited by BOTH the Atlantic and Pacific oceans.

**Solution 2 Time Complexity**

We run DFS 2(mxn) times. We then iterate through (mxn) nodes to construct our return list. If n represents the total number of nodes, our solution reduces to O(n).
