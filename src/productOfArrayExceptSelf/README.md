<h2>Product of Array Except Self</h3>

**Question**
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

**Solution 1**

Brute force O(n^2) solution:

1) Initialize an array
2) For each number in the original array, initialize a multiplicationResult variable. In an inner loop, multiply each index that is not the current index and push result onto array in step 1.
3) Return array from step 1.

**Solution 2**

At each index, the value of result we want at that index is a multiplication
of the total product before that index and the total product after that index.

1) Loop through array once to calculate array of product to the left of index
2) Loop through array again to calculate array of product to the right of index
3) Finally, loop through the array and multiply the array value at i from step 1 with step 2,
   to form the output array

Time Complexity: O(n)
Space Complexity: O(n)
