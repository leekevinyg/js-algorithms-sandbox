interface Node {
    $ref?: string,
    $id?: string,
    val? : string,
    neighbors? : Node[],
}

export const cloneGraph = (node) : Node => {
    const cloneMap = {};
    const searchStack = [node];

    while (searchStack.length > 0) {
        const currNode = searchStack.pop();
        const nodeId = currNode.$id || currNode.$ref;
        let nodeCopy = cloneMap[nodeId];

        if (!nodeCopy) {
            // if we haven't seen this node yet, create it's clone and add it to our map
            nodeCopy = <Node> {
                $id: nodeId,
                val: currNode.val,
                neighbors: [],
            }
            cloneMap[nodeId] = nodeCopy;
        }

        // add the cloned nodes edge relationships
        const neighbors = currNode.neighbors;
        neighbors.forEach(neighbor => {
            const neighborId = neighbor.$ref || neighbor.$id;
            // have we created a clone for this neighbor already?
            if (cloneMap[neighborId]) {
                // add the clone to our list of neighbors
                nodeCopy.neighbors.push(cloneMap[neighborId]);
            } else {
                // create a new node for this neighbor and add the neighbor clone to list of neighbors
                const clonedNeighbor = <Node> {
                    $id: neighborId,
                    val: neighbor.val, // TODO handle ref
                    neighbors: [],
                }
                cloneMap[neighborId] = clonedNeighbor;
                nodeCopy.neighbors.push(clonedNeighbor);
            }
            searchStack.push(neighbor);
        })
    }

    return cloneMap[node.$id];
}

