<h2>Longest Consecutive Sequence</h2>

**Question**

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

<pre>
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
</pre>

**Solution**

Ways to approach:

1.

Sort it using quicksort, and then return longest consecutive sequence of items that are 1 away.

2.

We can think of each number as a node in a graph. As we iterate through the input array, we 
start tracking the nodes that we have seen. When we see a neighbor of a node that we have seen before,
we can union them together using the union find data structure. At the end, we just return the number of 
items in the largest tree.

**Time and Space Complexity**

1.

TODO, study up on quicksort. This solution is O(nlgn).

2.

Our space complexity is O(n), as we allocate linear space for the hashtable and array in our UF data structure.

Our time complexity is O(nlgn) since inside the for loop, we just have O(1) lookups and O(lgn) union operations.






