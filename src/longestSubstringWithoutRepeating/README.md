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

**Brute Force**

1) Write a function to calculate the longest possible streak from the 
   start of the string without repeating charaters. 
       - Utilize a hashmap to store characters seen so far
       - Iterate through the string
       - The streak can be incremented as long as we haven't seen the 
         current character at index ```i``` as tracked in the hashmap.

2) Initialise a variable representing the ```maxStreak = 0```

3) Iterate through the string, and calculate the longest possible streak
   from ```i``` to the length of the input string. If this streak exceeds
   ```maxStreak```, update it.

4) Return ```maxStreak```

Time Complexity: O(n!)

Space Complexity: O(n) to store the seen hashmap in the function written in 
step 1 above.


