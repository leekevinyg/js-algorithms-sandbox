interface IGraph {
    addEdge(edge : number[]) : void;
    isCyclicDFS(startNode : number) : boolean;
}

export class Graph implements IGraph {
    // a map of a vertex (key) to it's number[] of neighboring tail verticies
    private adjList : object;
    private exploredNodes : number[];

    constructor() {
        this.adjList = {};
        this.exploredNodes = new Array();
    }

    public addEdge(edge: number[]) : void {
        const headNode : number = edge[0];
        const tailNode : number = edge[1];

        if (Array.isArray(this.adjList[headNode])) {
            this.adjList[headNode] = [...this.adjList[headNode], tailNode];
        } else {
            this.adjList[headNode] = [tailNode];
        }
    }

    private getNextUnexploredNode(exploredNodes : number[]) : number {
        const verticies = Object.keys(this.adjList);
        for (let i=0; i<verticies.length; i++) {
            let node = parseInt(verticies[i]);
            if (!exploredNodes.includes(node)) {
                return node;
            }
        }
        return -1;
    }

    public isCyclicDFS(startNode : number) : boolean {
        let isCyclic = false;
        let stack = [startNode];

        while (stack.length > 0) {
            let currNode = stack.pop();
            // TODO: do we need to keep track of explored nodes?
            if (this.exploredNodes.includes(currNode)) {
                isCyclic = true;
                break;
            }

            this.exploredNodes.push(currNode);
            let neighbors = this.adjList[currNode];

            // disconnected graph, start DFS again at next unexplored component
            if (!neighbors || neighbors.length === 0) {
                let nextUnexploredNode : number = this.getNextUnexploredNode(this.exploredNodes);
                if (nextUnexploredNode === -1) {
                    return false;
                }
                return this.isCyclicDFS(nextUnexploredNode);
            }

            for (let i=0; i < neighbors.length; i++) {
                stack.push(neighbors[i]);
            }
        }
        this.exploredNodes = new Array();
        return isCyclic;
    }
}