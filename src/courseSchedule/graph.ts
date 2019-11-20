interface IGraph {
    addEdge(edge : number[]) : void;
    isCyclicDFS(startNode : number) : boolean;
}

export class Graph implements IGraph {
    // a map of a vertex (key) to it's number[] of neighboring tail verticies
    private adjList : object;

    constructor() {
        this.adjList = {};
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

    public isCyclicDFS(startNode : number) : boolean {
        let isCyclic = false;
        let stack = [startNode];
        let visited = [];
        let currentPathToLeaf = [];

        while (stack.length > 0) {
            let currNode = stack.pop();
            if (currentPathToLeaf.includes(currNode)) {
                isCyclic = true;
                break;
            }
            if (visited.includes(currNode)) {
                continue;
            }
            visited.push(currNode);
            currentPathToLeaf.push(currNode);
            let neighbors = this.adjList[currNode];
            if (!neighbors) {
                // we are at a leaf node, clear current path to node
                currentPathToLeaf = [];
                continue;
            }
            for (let i=0; i < neighbors.length; i++) {
                stack.push(neighbors[i]);
            }
        }
        return isCyclic;
    }
}