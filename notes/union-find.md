<h2>Union Find</h2>

Given a set of N nodes stored in an array where each value points to it's
parent node, we want to support the following 2 operations:

1) **Union**

    Connects 2 nodes. This can be done by setting the root of one node to the 
    root of another. To reduce the tree size, it is important to take the
    smaller tree under the wings of the bigger tree. Reducing the tree height 
    this way guarantees that the height of the tree (which may need to be 
    traversed completely by the root() operation in  both the union and find 
    operations) does not exceed lg n.

    Consider the following sketch of a proof:

    In any union operation a arbritary node X's depth will increase by 1. If we 
    put the smaller tree under the bigger tree than the tree size at most doubles
    in size. We can only double at most lg n times, as by that time we 
    are guaranteed to reach a tree of size n, where n is the total number of 
    components in the graph. Therefore, the height of the final tree can be at 
    most lg n.

2) **Find** if 2 components are connected

    We can simply run the a root() operation on each of the nodes to see if they
    are equal. If they are, the components share the same root, so they are 
    connected.

    The root() operation can be implemented by "chasing the pointer" to each 
    nodes parent recursively or with a while loop until the pointer does not 
    change.

An example implementation [here](../src/numberOfIslands/union-find.ts).  

More info in a video [here](https://www.coursera.org/learn/algorithms-part1/lecture/fjxHC/dynamic-connectivity). 

