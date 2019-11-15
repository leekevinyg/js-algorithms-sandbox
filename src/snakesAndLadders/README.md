<h2>Snakes and Ladders</h2>

**Question**

In a snacks and ladder game, each player moves X places along the board based
off the result of a dice throw. If player A throws a 2, then player A moves
from position 2 to position 4. If that position is occupied by a ladder, then
the player can ascend the ladder to whereever the ladder leads. If that
position is occupied by a snake, then the player slides down the board to
whereever the snake leads. The goal is to get to the final position in the
board. For the purposes of this question, we assume we can control the dice
roll and the goal is to find the quickest way up the board to the final position.

**Solution (Using BFS)**

This problem can be reduced to a BFS search for the shortest path in a graph.
First we represent the board as a 1D integer array of 1 to totalNumberOfBoardPositions. 
Each integer represents a position on the board. From each position we have access to 
the next 6 possible positions (from the dice roll). On top of these 6 positions, 
we also have access to any positions that we can get to via a snake or a ladder 
from these 6 positions. We can use BFS to explore the graph since all edges are weighted 
equally AND our goal is to find the shortest path (fewest number of moves or dice rolls). 
For example, when we initialize BFS from the start node 1 we have access to 2,3,4,5,6,7 
and any positions connected by a ladder/snake from these positions. When we arrive at 
these positions, we append the new positions onto our BFS search frontier (queue), 
and we keep track of the number of moves it has taken us to get there. We continue 
doing this until we arrive at the goal node. Since we are keeping track of total 
distance that it has taken us to get there, we can just return the distance from 
the start of the goal node to get the fewest number of moves needed.
