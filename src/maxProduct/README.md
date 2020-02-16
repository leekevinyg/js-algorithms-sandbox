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

**Solution 2**

We iterate through the array once, and consider 3 separate cases:

1) Next number is a positive integer when ```i=2```:

   <pre>
           ↓
   [-1, 6, 2, 3]
   </pre>

   At ```i=2```, the ```prevMax=12```, the new currMax is simply:
   ```currMax=prevMax*nums[i]```

1) Next number is a negative integer when ```i=2```:

   <pre>
           ↓
   [-1, 6, 2, -3]
   </pre>

   At ```i=2```, the ```prevMax=12```, but to get the actual max of the
   subarray in this case we also need to store a ```prevMin``` variable
   which at this point would be ```-12```. Then, ```currMax=prevMin*nums[i]```.

3) Next number is the beginning of the max subarray
   <pre>
              ↓
   [3, -1, 0, 7, 9]
   </pre>
   We need to consider each element ```nums[i]``` as the starting position
   of a maximum product subarray.

We store a runnin accumulator of the max of any of these 3 cases and return
it at the end.

Time Complexity: ```O(n)```

Space Complexity: ```O(1)```