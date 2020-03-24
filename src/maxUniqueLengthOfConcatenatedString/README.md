<h2>Maximum Length of a Concatenated String with Unique Characters</h2>

**Problem**
Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.

<pre>
Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
</pre>

**Questions**

1) Can we assume each subsequence is unique?

- Yes

2) How do we want to handle an empty array?

- Return 0

**Solution**



