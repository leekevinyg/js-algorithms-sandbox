<h2>Three Sum</h2>

**Question**

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

**Clarification Questions**

1) Are the numbers all unique? 
   Impact: YES: we don't have to worry duplicate numbers.
           NO: we have to make sure we don't use the same number more than the amount
           of times it appears in the input array.

2) What is considered a duplicate? Do we care about permutations? i.e., for the above example, should [-1, 0, 1]
   and [0, 1, -1] be considered the same answer?
   Impact: YES: We need to make sure we don't return permutations of a solution already in the set.
           NO: No need to filter a bruce force solution.

3) Do we care about indicies?
   Example: Given [0, 0, 0, 0], we could have a solution set of [0, 0, 0] representing the first 3 zeros in the question, and then another solution were we take the first 2 zeros and the 4th zero. Are they considered the
   same?

4) What do we want to return when the total length of the input array is less than three?

**Brute Force**

A brute force solution that considers all the possibilities, and then removes permutations
of the same solution set item would work but would be very slow.

- First loop would run ```n``` times
- Second loop would run ```n-1``` times
- Third loop would run ```n-2``` times
- Depending on how we detect permutations in the innermost loop, the work done here would 
  be anywhere from ```lg n``` to ```n```.

**Alternative Solution**

1) Sort the array - O(lg n)
2) Iterate through the array, maintaining 3 pointers.
   - One at the beginning of the ray representing the first number in a possible 3 sum,
     i.e., ```nums[i]```
   - Two pointers denoting the start/end of the rest of the array that we will use to do
     an ```O(n)``` search for the the 2 sum complement of ```nums[i]```
3) Because the array is sorted, permutations can be handled by skipping any pointer 
   element where the pointer is pointing to a number we have previously seen before
   at that pointer position.

Time Complexity: ```O(n^2)```
Space Complexity: ```O(1)```