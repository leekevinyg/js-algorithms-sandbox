interface Node {
    val : string,
    neighbors : Node[],
}

export const cloneGraph = (node) : Node => {
    /* 1. Store cloned nodes in a HashMap
    */
    const map = {};

    /* 2. Traverse original graph
          - If node is not cloned, clone it and add it to the map
            with initial neighbors list empty
    */
    let searchStack = [node];
    while(searchStack.length > 0) {
        const currNode = searchStack.pop();
        if (!map[currNode.val]) {
            map[currNode.val] = {
                neighbors: [],
            }
        }
         /* 3. Examine neighbors of node
          - If neighbors are not cloned, clone it and add it to the map
          - Add cloned neighbors to our cloned node from step 2
         */
        for (let i=0; i<currNode.neighbors.length; i++) {
            const neighborNode = currNode.neighbors[i];
            if (!map[neighborNode.val]) {
                map[neighborNode.val] = {
                    neighbors: [],
                }
                searchStack.push(neighborNode);
            }
            map[currNode.val].neighbors.push(map[neighborNode.val]);
        }
        map[currNode.val].val = currNode.val;
    }

    // Return graph rooted at start node.
    return map[node.val];
}

