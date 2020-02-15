<h2>Maximum SubArray</h2>

**Problem**

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

<pre>
Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
</pre>

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

**Solution 1**

High level idea: As we iterate through the input array, the maximum subarray can be either be found by adding elements encountered so far to a sum accumulator OR by starting a new accumulator at the current index and continueing from there.

1) Handle empty or null input by returning 0

2) Initialize a ```maxSum``` variable and a ```sumSoFar``` variable that is equal to the 
   first number in the array

3) Iterate through the array from 1 to the length of input array. Our ```sumSoFar``` is the 
   maximum of ```sumSoFar + inputArray[i]``` OR ```inputArray[i]```.
   
   Whenever our ```sumSoFar``` variable exceeds ```maxSum```, update ```maxSum```

4) Return ```maxSum```
