<h2>Alien Dictionary</h2>

**Question**

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:
<pre>
Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
</pre>

Example 2:
<pre>
Input:
[
  "z",
  "x"
]

Output: "zx"
</pre>

Example 3:
<pre>

Input:
[
  "z",
  "x",
  "z"
] 

Output: "" 

Explanation: The order is invalid, so return "".
</pre>

Note:
- You may assume all letters are in lowercase.
- You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
- If the order is invalid, return an empty string.
- There may be multiple valid order of letters, return any one of them is fine.

**Solution**

This problem can be reduced to a topological sort problem. We first take a look at the array:

<pre>
[
    "a"
    "b"
    "c"
]
</pre>

In this word list:

- a must come before b
- b must come before c

```[a, b]``` and ```[b, c]``` can be thought of as directed edges where a is a prerequisite of b,
and b is a prerequisite of c.

Then, this problem becomes running a topological sort on the list of edges generated from the words array.

To generate the edges, we simply parse the words column by column. To think about this we can use a slightly 
more complicated array:

<pre>
[
    "ab"
    "cz"
]
</pre>

In the first column we can derive the edge ```[a, c]```.
In the second column we can derive the edge ```[b, z]```.
For every letter position we must generate a prerequisite pair with the letter in the next row, but same column.

We also need to consider duplicates:

<pre>
[
    "aa"
    "ca"
]
</pre>

Here we can derive that ```[a, c]``` is a necessary prerequsite, but we will ignore the fact that ```a``` is a
prerequisite of ```a```, since for our problem space this is meaningless.

Once we have a prerequisite edge list, this problem becomes a variant of the course schedule problem, which we can solve
in O(V+E) with topological sort.

To detect if an ordering is not possible, we simply have to detect if there is a cycle in our graph.



