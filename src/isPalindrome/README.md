<h2>Is Palindrome</h2>

**Question**
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

<pre>
Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
</pre>

**Possible Questions**

- Is an odd length string like "ababa" considered a palindrome?
- Is an empty string considered a palindrome?
- Can we ignore punctuation?

**Solution**

Use regex to replace non-alphanumeric characters in the string
with an empty space.

With our clean string, use 2 pointers:

- One from the left
- One from the right

Compare the character values at each pair of pointer values. 
If they are the same, increment the left pointer by one,
and decrement the right pointer by one.

If they are different, return false immediately.

If we have looked at all possible values, and haven't found one that
is different, then we have a palindrome.

Time complexity: O(n)

Space complexity: O(1)

Note: This works on odd length strings too because at the point ```l < r``` is
no longer true, we only have one letter left to compare. A string of length 1 
is always a palindrome of itself so not comparing this last value will not 
affect our result.