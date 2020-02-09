<h2>Container with most water</h2>

**Question**

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

**Solution 1**

Brute Force:

Iterate to the index representing each bar and look at the max area formed with bars to
the left of it and bars to the right of it.

Time complexity: O(n^2)
Space complexity: O(n)

**Solution 2**

1) Initialize ```maxArea``` to 0
2) Store 2 pointers, one at the beginning of the array, one at the end - this is our max possible width
3) We iterate through the array once
    - At each step, we calculate the current max area by multiplying the max area obtained
      with edges represented by our pointers in step 2.
    - If this max area exceeds the previous max area, update it.
    - We take the minimum height from the bars represented by the 2 pointers and move them
      forward one step (looking for potentially a bar that is higher)
    - We break the loop if ```startIndex``` ever equals ```endIndex```

Time complexity: O(n)
Space complexity: O(1)

