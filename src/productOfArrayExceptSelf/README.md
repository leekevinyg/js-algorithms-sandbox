<h2>Product of Array Except Self</h3>

**Question**
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

**Solution**

Brute force O(n^2) solution:

1) Initialize an array
2) For each number in the original array, initialize a multiplicationResult variable. In an inner loop, multiply each index that is not the current index and push result onto array in step 1.
3) Return array from step 1.

Can we improve anything?

Approach 1:
- Let's see if we are recomputing anything
- 
- If we are, we can store a hashtable of the result
- 

Approach 2:
- Loop #1: Multiple the entire array for a total value (TV)
- Loop #2: Take the total value form above step and divide by the current index to form the new number at that index.