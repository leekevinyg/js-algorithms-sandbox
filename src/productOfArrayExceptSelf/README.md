<h2>Product of Array Except Self</h3>

**Question**
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

**Solution**

Brute force O(n!) solution:

1) Initialize an array
2) For each number in the original array, multiply each index that is not the current index and push result onto array in step 1.
3) Return array from step 1.
