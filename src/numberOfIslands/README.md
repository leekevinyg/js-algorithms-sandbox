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
To determine the connected island components we will start BFS at each island node. Each node that is part of the same tree will be marked with the same value. At the end, we simply count how many unique trees we have to determine the number of island components.

**Resources**

- [Graph Representation](https://www.geeksforgeeks.org/graph-and-its-representations/)