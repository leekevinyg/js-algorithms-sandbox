<h2>Trapping Rain Water</h2>

**Question**

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

![trapping rain water](./trappingRainWater.png)

**Solution**

- Initialize an array to keep track of the volume of our buckets of water
- Loop through the array
- We can start a bucket when we reach our first number
- We do not end the bucket until we reach another number that is > 0. This is our second number.
- To calculate the max trappable water, we multiply the minimum of the first or second number with the number
  steps it took to get to the second number
- TODO: The actual trappable water is going to be less than this as we can have rocks that take up space.
- Finally, sum the total volume of water we can trap with our buckets




