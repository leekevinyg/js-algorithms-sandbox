<h2>Number of Islands - BFS Solution</h2>

**Question**

Given a 2d grid map of '1's (land) and '0's (water), count the number of
islands. An island is surrounded by water and is formed by connecting
adjacent lands horizontally or vertically. You may assume all four edges of
the grid are all surrounded by water.

Example One
 
Input:

    11110 
    11010 
    11000
    00000
 
 Output: 1
 
Example Two 

Input: 
 
    11000 
    11000 
    00100
    00011

**Solution**

This problem can be reduced to the problem of finding the number of connected island components in the graph.
To determine the connected island components we will start BFS at each island node. Each BFS call explores a connected
component, and marks nodes it touches as visited. Since we only kick off BFS at nodes that have not been marked visited, BFS is only executed once for every connected island component in the graph. We simply need to return the 
amount of times that BFS executes in order to get the number of unique island components present in the grid.