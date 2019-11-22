<h2>Course Schedule</h3>

**Question**

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

**Solution**

This problem can be reduced to the problem of finding if a directed graph contains cycles. If it contains a cycle, then it is not possible to finish all courses as taking one course will rely on taking another course,
and vice versa.

We will represent courseA requiring a prerequisite of courseB as the edge courseA -> courseB. The graph will contain a cycle if there is also an edge we can follow from courseB back to courseA.

For cycle detection, we use DFS. If we encounter a node that is already in our current path to a node i.e.,
(already in our recursion stack) then we know we have encountered a cycle, making it impossible to finish all courses.

**Time Complexity**

For DFS, the time complexity is usually O(V+E) since we need to touch every vertex and follow every edge. In this problem, the time complexity is O(N), where N is the number of courses, since we only touch one node once in our traversal.

**Notes**

Tracking visited nodes is not enough to determine if there is a cycle in a graph. There can be two separate paths to the SAME node that do not result in a cycle. See this [post](https://stackoverflow.com/a/2869661/1718640) for details.

To detect a cycle properly, we have to maintain the current path to a node in the recursion or user-maintained stack. When we backtrack, we must delete nodes from our current path to a node. If we encounter a node that is already in the stack, then we have found a cycle.

Another option to solve this problem is to use topological sort i.e., can the graph be arranged such that 
for every vertex u and v, u comes before v in the directed graph? If the grpah can be arranged topologically,
then it does not contain cycles. Topological sort algorithms can usually be implemented in linear time.

**Interesting follow up topics**

A few follow up questions to investigate: 

1) Can BFS be used to cycle detection too?

For undirected graphs, when encountering a visited node indicates a cycle, BFS can be used as well.

For directed graphs, we must use [Kahn's algorithm for topological sorting](https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph-using-bfs/)

2) Consider undirected vs directed graphs. What are the impacts on cycle detection?

An undirected graph has a cycle if and only if a depth-first search (DFS) finds an edge that points to an already-visited vertex (a back edge).

For a directed graph, in addition to visited vertices we need to keep track of vertices currently in recursion stack of function for DFS traversal. If we reach a vertex that is already in the recursion stack, then there is a cycle in the tree.

3) Are there any benefits to using topological sorting vs DFS?

Time complexity for topo sort is the same as DFS i.e., O(V+E)

4) Try implementing DFS recursively

A few resources:

- [Detecting cycle in a graph using union find](https://www.geeksforgeeks.org/union-find/)

- [Detecting a cycle in an undirected graph using BFS](https://www.geeksforgeeks.org/detect-cycle-in-an-undirected-graph-using-bfs/)

- [Topological Sorting](https://www.geeksforgeeks.org/topological-sorting/)

- [Detecting a cycle in a directed graph using DFS](https://www.geeksforgeeks.org/detect-cycle-in-a-graph/)
