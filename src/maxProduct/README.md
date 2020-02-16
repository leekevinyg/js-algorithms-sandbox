<h2>Maximum Product Subarray</h2>

**Problem**

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

<pre>
Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
</pre>

**Solution 1**

Brute Force:

1) Store ```maxProductSoFar``` and iterate through the numbers list

2) Each number at index i, can form a subarray with numbers after it from length 0
   to numbersList.length - i. Calculate them in an inner loop. Anytime a product exceeds
   ```maxProductSoFar```, we update it.

3) Return ```maxProductSoFar```

Time Complexity: ```O(n^2)```

Space complexity: ```O(1)```