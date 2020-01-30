<h2>Two Sum</h2>

**Question**

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
<pre>
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
</pre>

**Solution**
- Store hashtable of numbers we have seen already and their indices
- For each number, calculate its complement
- If we have seen the complement already, then return the current index i, and the complement index stored in the hashtable
- Else, add the number and it’s index into the hashtable
- **Beware**:
    The index of a number may be 0 which is falsy, but we need to return true for it.

**Time Complexity**
O(n), single pass

**Space Complexity**
O(n) for the hashtable
