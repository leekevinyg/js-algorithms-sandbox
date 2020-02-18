<h2>Two Sum Sorted Array</h2>

**Question**

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

**Solution**
1) store 2 pointers
    - one at the beginning
    - one at the end

2) while pointers are not equal, add the numbers at the two pointers
    - if they are equal to the target, return the left index and right index (non zero
      based versions)
    - if they are smaller than the target, increment left pointer by 1
    - if they are bigger than the target, decrement right pointer by 1

3) If target it not found, return an empty array of indicies

Time Complexity: O(n)

Space Complexity: O(1)
