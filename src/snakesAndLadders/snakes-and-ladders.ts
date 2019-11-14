interface INode {
    id : number;
    distanceFromStart: number;
}

class Node implements INode {
    id: number;
    distanceFromStart: number;
    constructor(position : number, distanceFromStart : number) {
        this.id = position;
        this.distanceFromStart = distanceFromStart;
    }
}

/* 
    The snakesAndLadders parameter is a key/value map denoting the initial positions of snakes and ladders (key)
    and the position (value) they lead to.
    Example: { 16: 6, 48: 26, 49: 11 }
*/
function quickestWayUp(snakesAndLadders : object, totalPositionsOnBoard: number) : number {
    let numberOfMoves : number;

    // Run BFS on the board, keeping track of our distance from the start
    let startNode : Node = new Node(1, 0);
    let visited : Array<number> = new Array(totalPositionsOnBoard);
    let queue : Array<Node> = [startNode];

    while (queue.length > 0) {
        let currentNode : Node = queue.pop();
        let nodeId : number = currentNode.id;
        visited[nodeId] = 1;

        if (nodeId === totalPositionsOnBoard) {
            numberOfMoves = currentNode.distanceFromStart;
            break;
        }

        // visit the next 6 positions accessible from a dice roll + positions connected by snakes and ladders
        for (let pos : number = nodeId + 1; pos < nodeId + 6 && nodeId < totalPositionsOnBoard; ++pos) {
            if (visited[pos]) {
                continue;
            }

            let nextPosId : number = pos;
            if (snakesAndLadders[pos] !== undefined) {
                nextPosId = snakesAndLadders[pos];
            }

            // construct the next node to add onto the search frontier
            let distance = currentNode.distanceFromStart + 1;
            let nextNode : Node = new Node(nextPosId, distance);
            queue.unshift(nextNode);
        }
    }

    return numberOfMoves;
}

export default quickestWayUp;