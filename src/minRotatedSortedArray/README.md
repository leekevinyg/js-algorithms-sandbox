<h2>Minimum in a Rotated Sorted Array</h2>

**Question**

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  ```[0,1,2,4,5,6,7]``` might become  ```[4,5,6,7,0,1,2]```).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:
<pre>
Input: [3,4,5,1,2] 
Output: 1
</pre>
Example 2:
<pre>
Input: [4,5,6,7,0,1,2]
Output: 0
</pre>

**Clarification Questions**

1) Can we expect input to always contain at least one item?
2) Do we want to return the index or the number itself?
3) Are there duplicates in the array?

**Solution 1**
Brute Force

1) Initialize ```minSoFar``` to the first item in the input array
2) Iterate over the array, if we see anything smaller than ```minSoFar```, update it.
3) Return ```minSoFar```

Time Complexity: ```O(n)```
Space Complexity: ```O(1)```

**Solution 2**

Since the array is mostly sorted, we can take advantage of binary search
to try to get to a more efficient solution.

