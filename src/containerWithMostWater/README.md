<h2>Container with most water</h2>

**Question**

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

**Solution 1**
Brute Force:

Iterate to each bar, look at the max area formed with bars to
the left of it and bars to the right of it.

Time complexity: O(n^2)
Space complexity: O(n)

**Solutions 2**

Construct the max achievable area from each the left
Construct the max achievable area from each index to the right



