<h2>Number of Islands</h2>

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

**Solution (Using the union find data structure)**

This problem can be reduced to the problem of finding the number of connected
components in a graph. Once we have found the number of connected components,
the number of islands is simply the total number of connected components minus
the number of water components.

First, we represent the graph as an array, with each entry in the array represeting 
a particular nodes parent.

We iterate through each node in our 2D array, and check if it's neighbors 
are of the same type. If they are, we can use the union find data structure to 
union them together, a lg n operation.

Once we have traversed all nodes, we simply check how many unique roots there 
are in our tree to get the total number of connected components. Subtracting
the water components from this value will give us the total # of islands.

**Complexity Analysis**

TODO

**Union Find Notes**

1) Union

    Connects 2 nodes. This can be done by setting the root of one node to the 
    root of another. To reduce the tree size, it is important to take the
    smaller tree under the wings of the bigger tree. This guarantees that the
    height of the tree (which may need to be traversed completely in the worst
    case for both the union and find operations) does not exceed lg n.

    Consider the following sketch of a proof:

    In any union operation a arbritary node X's depth will increase by 1. If we 
    put the smaller tree under the bigger tree than the tree size at most doubles
    in size. We can only double at most lg n times, as by that time we 
    are guaranteed to reach a tree of size n, where n is the total number of 
    components in the graph. Therefore, the height of the final tree can be at 
    most lg n.

2) Find if 2 components are connected

    We can simply run the a root() operation on each of the nodes to see if they
    are equal. If they are, the components share the same root, so they are 
    connected.

    The root() operation can be implemented by "chasing the pointer" to each 
    nodes parent recursively or with a while loop until the pointer does not 
    change.

More info in a video [here](https://www.coursera.org/learn/algorithms-part1/lecture/fjxHC/dynamic-connectivity). 




