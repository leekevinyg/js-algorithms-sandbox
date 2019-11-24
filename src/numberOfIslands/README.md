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

**Solution 1**

This problem can be reduced to the problem of finding the number of connected island components in the graph.
To determine the connected island components we will start BFS at each island node. Each BFS call explores a connected
component, and marks nodes it touches as visited. Since we only kick off BFS at nodes that have not been marked visited, BFS is only executed once for every connected island component in the graph. We simply need to return the amount of times that BFS executes in order to get the number of unique island components present in the grid.

**Solution 1 Time Complexity**

This solution is O(n), since we visit each node a maximum of one time in our graph traversal.

**Solution 2**

We can also solve this problem using the union find data structure to find the number of connected components
Once we have found the number of connected components, the number of islands is simply the total number of connected components minus the number of water components.

First, we represent the graph as an array, with each entry in the array represeting 
a particular nodes parent.

We iterate through each node in our 2D array, and check if it's neighbors 
are of the same type. If they are, we can use the union find data structure to 
union them together, a lg n operation.

Once we have traversed all nodes, we simply check how many unique roots there 
are in our tree to get the total number of connected components. Subtracting
the water components from this value will give us the total # of islands.

**Solution 2 Time Complexity**

Each union operation uses 2 ```root(node)``` operations that chase the parent until it doesn't change.
This ```root``` operation may need to traverse the entire height of the tree. Uses a weighted union find 
data structure we can limit the height of trees to lg n (see details below). Since we may need to union 
every node together in the worst case, this operation takes O(nlgn). The operation to find the unique roots,
also needs to traverse the total number of connected components in the graph. This again, could be n. Therefore,
the total complexity for this solution is nlgn + n or O(nlgn).

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

