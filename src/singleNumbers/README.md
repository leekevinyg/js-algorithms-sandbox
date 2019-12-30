<h3>Single Numbers</h3>

**Question**

Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
<pre>

Input: [2,2,3,2]
Output: 3

</pre>

Example 2:
<pre>

Input: [0,1,0,1,0,1,99]
Output: 99
</pre>

**Solution 1**

1) Store a hashmap of seen numbers.
2) Iterate through ```nums``` array.
   - If a number hasn't been seen, initialize it in hashmap to true
   - If a number has been seen, flip the boolean value to false
3) Create a ```singleNumbers``` number[] array, filter the hashmap and add any number that still has a value of ```true``` to ```singleNumbers```
4) Return ```singleNumbers```

Time complexity O(n), space complexity O(n)