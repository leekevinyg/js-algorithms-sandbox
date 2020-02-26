<h2>Search in Rotated Sorted Array</h2>

**Question**

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

<pre>
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
</pre>

**Solution**

Simple ```O(n)``` solution:

1) Iterate through the array and see if each number is equivalent to our target

```O(lg n) solution```:

1) Find the index of the min number in the array
2) Using min number, decide 
3) Do a binary search for the target.

