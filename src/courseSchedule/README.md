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

Another option to solve this problem is to use topological sort i.e., can the graph be arranged such that 
for every vertex u and v, u comes before v in the directed graph? If the grpah can be arranged topologically,
then it does not contain cycles. Topological sort algorithms can usually be implemented in linear time.

**Important questions**

1) Are their duplicate edges?

2) How would this problem change if we were working with an undirected graph?
