<h2>Heap</h2>

Provides constant time access to the smallest (min heap) or biggest
(max heap) item inside the heap. 

This is better than linear data structures like arrays or linked lists which can
get you these values in O(n) time.

This is also better than non-linear data structures like a 
Binary Search Trees (BST) which will get you these values in O(log n) time.

A heap is often a data structure that is used to implement a Priority
Queue. 

**The Priority Queue**

- *Insert()* an item with a priority
- *Remove()* the highest priority item
- *Peek()* the highest priority item
- *isEmpty()* determine if queue is empty

A priority queue can be implemented with a min/max heap.

**A Min Heap**

Is a complete binary tree filled from top to bottom, left to right.

**Insert**

- Inserts an item at the last position in the heap.
- Restore the heap (upwards) i.e., bubble it above anything it is less than it. 
- This is an O(lg n) operation.

**Remove**

- Removes the root of the binary tree (at the top of the heap).
- When the root is removed, we must keep the binary tree complete. Therefore, we must move
the last item in the binary tree (towards the most bottom and most right) into the root position.
- Restore the heap (downwards) i.e., bubble the root node down if it is greater than any of it's
children.
- This is an O(lg n) operation.

To implement a Min Heap, we must implement the ```swap(nodeA, nodeB)``` operation. This operation
will swap the position along parent-child relationships.











