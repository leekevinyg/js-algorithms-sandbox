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

```[a, b]``` and ```[b, c]``` can be thought of as directed edges where ```a``` alphabetically precedes ```b``` and 
```b``` alphabetically preceds ```c```.

Once we make sure that every letter encountered is added as a vertex in our graph representation, this problem becomes
a problem of running a topological sort on the list of alphabetically precedent edges generated from the words array.

To generate the edges, we simply continue to compare letters among the words to establish precedent relationships.

Example:
<pre>
[
    "az"
    "cb"
]
</pre>

In the first column we can derive the edge ```[a, c]```, representing the fact that a comes before c lexographically
in this alient alphabet.
For the second column we are unable to derive a relationship unless everything before the letters we want to compare is
the same. To compare letters above the first position in each row, we must check that everything preceding the letters
we want to compare is the same:

<pre>
[
  "abc"
  "abd"
]
</pre>

At column three, we can derive ```[c, d]```, since in both the words we want to compare, the letters are the same up until
that point.

We also need to be careful to watch out for duplicate letters:

<pre>
[
  "abb"
  "abc"
]
</pre>

It is not necessary to derive the edges ```[a, a]``` and ```[b, b]``` here, since this is meaningless in our problem space.

To detect if an ordering is not possible, or the words given in the input are not alphabetically sorted, we simply have to 
detect if there is a cycle in our DAG represented by our edges.

**Plan**

1) Parse the words array into prerequisite edges representing 

2) Construct a graph from the prerequisite edges.

3) Topologically sort the graph (return [] if a cycle is found).

To topologically sort, we will use recursive DFS, and keep track of a stack (outside of the call stack),
that records the nodes where all their children have already been explored. We simply reverse this list to get
the topological ordering.

**Time Complexity**
O(V+E)



