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

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

**Solution 1**

Run BFS from each node in the graph, only adding neighbors into the search frontier if they meet the flow (height) requirements. If the graph reaches BOTH the atlantic and pacific ocean roots, then add it to our list of grid coordinates that we will return.

**Solution 1 Time Complexity**

O(n^2). Each time we run BFS from a node, we touch every node a maximum of once. Since we run BFS for every node, this solution is O(n^2).

**Notes**

- m and n being less than 150
- "the order of the grid coordinates not mattering" (read: doesn't matter if you use DFS or BFS)
