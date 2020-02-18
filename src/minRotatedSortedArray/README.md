<h2>Minimum in a Rotated Sorted Array</h2>

**Question**

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  ```[0,1,2,4,5,6,7]``` might become  ```[4,5,6,7,0,1,2]```).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:
<pre>
Input: [3,4,5,1,2] 
Output: 1
</pre>
Example 2:
<pre>
Input: [4,5,6,7,0,1,2]
Output: 0
</pre>

**Clarification Questions**

1) Can we expect input to always contain at least one item?
2) Do we want to return the index or the number itself?
3) Are there duplicates in the array?

**Solution 1**
Brute Force

1) Initialize ```minSoFar``` to the first item in the input array
2) Iterate over the array, if we see anything smaller than ```minSoFar```, update it.
3) Return ```minSoFar```

Time Complexity: ```O(n)```
Space Complexity: ```O(1)```

**Solution 2**

Since the array is mostly sorted, we can take advantage of binary search
to try to get to a more efficient solution.

But because the array is rotated, we cannot do a normal binary search.

Instead what we want to do is search for the inflection point, i.e., 
the point where the sorted array is rotated.

1) Initialize our mid point

2) If our mid point is > first element in the array, then our inflection point 
   is to the right of mid. Continue our search there.
<pre>
         mid
          ↓
   [4, 5, 6, 7, 2, 3]
                ↑ 
            inflection  
</pre>

    If our mid point is < first element in the array, then our inflection point is to the left of mid. Continue our search there.
<pre>
      mid
       ↓
   [4, 1, 2, 3]
       ↑ 
   inflection (part of left split)  
</pre>

3) We stop the search when we find the inflection point i.e.,

   - ```nums[mid - 1] > nums[mid]```, ```mid``` is smallest!
    <pre>
               mid
                ↓
   [4, 5, 6, 7, 2, 3]
                ↑ 
            inflection  
    </pre>
   - ```nums[mid] > nums[mid + 1]```, ```mid + 1``` is smallest
    <pre>
      mid
       ↓
   [6, 7, 2, 3]
          ↑ 
      inflection  
    </pre>

  
   

