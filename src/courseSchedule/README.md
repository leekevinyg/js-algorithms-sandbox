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

This problem can be reduced to the problem of finding if a directed graph contains cycles. If it contains a cycle, 
then it is not possible to finish all courses as taking one course will rely on taking another course,
and vice versa.

We will represent courseA requiring a prerequisite of courseB as the edge courseA -> courseB. The graph will contain a 
cycle if there is also an edge we can follow from courseB back to courseA.

For cycle detection, we use DFS. If we encounter a node that is already in our recursion stack, then we 
know we have encountered a cycle, making it impossible to finish all courses.

Important questions:

Are there courses without prequisites? If yes, then we are working with a disconnected graph. If no, then the graph is 
a single component.

**TODO: Investigate**

[why DFS for cycle detection?](https://stackoverflow.com/questions/2869647/why-dfs-and-not-bfs-for-finding-cycle-in-graphs))

[how to do DFS on a disconnected graph?]