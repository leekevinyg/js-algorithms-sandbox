<h2>Longest Substring without Repeating Characters</h2>

**Question**

Given a string, find the length of the longest substring without repeating characters.

<pre>
Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: 
The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

</pre>

**Possible Questions**

- Is a capitalized character considered the same or different character?
- Is an empty string a charactar?

**Solution**

This is a classic sliding window problem.

1) Initialize 2 pointers (i, j) to 0
2) Pointer j starts traversing the length of the string
3) As we traverse, we keep track of the count of characters that we have encountered
4) If a duplicate is detected, we move Pointer i right (and update the seen character map), until no duplicates are detected
5) Keep track of our character count streak (largest window) as we Traverse until j hits the end of the string
6) Return the largest window detected

Time Complexity: O(n^2)

Space Complexity: O(n)


