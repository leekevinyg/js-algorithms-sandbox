interface IGraph {
    addEdge(edge : number[]) : void;
    topoSort() : number[];
}

export class Graph implements IGraph {
    // a map of a vertex (key) to it's number[] of neighboring tail verticies
    private adjList : object;
    private totalNodes : number;
    private isCyclic : boolean;

    constructor(numNodes : number) {
        this.adjList = {};
        this.totalNodes = numNodes;
        this.isCyclic = false;
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

    // return value represents whether graph is cyclic or not
    private topoSortHelper(startNode : number, visited: boolean[], stack : number[], recStack : boolean[]) : boolean {
        visited[startNode] = true;
        recStack[startNode] = true;

        let neighbors = this.adjList[startNode];
        for (let i=0; neighbors && i < neighbors.length; i++) {
            if (recStack[neighbors[i]]) {
                this.isCyclic = true;
            }
            if (visited[neighbors[i]] === false) {
                this.topoSortHelper(neighbors[i], visited, stack, recStack);
            }
        }
        recStack[startNode] = false;
        stack.push(startNode);
        return false;
    }

    public topoSort() : number[] {
        let recStack = [];
        let tempStack : number[] = [];
        let visited = [];

        for (let node=0; node < this.totalNodes; node++) {
            visited[node] = false;
            recStack[node] = false;
        }

        for (let node=0; node < this.totalNodes; node++) {
            if (visited[node] === false) {
                if (this.topoSortHelper(node, visited, tempStack, recStack)) {
                    return undefined; // a cycle exists, no topo sort possible
                };
            }
        }

        if (this.isCyclic) {
            return undefined;
        }

        let topoSortedStack = [];
        while (tempStack.length > 0) {
            topoSortedStack.push(tempStack.pop());
        }

        return topoSortedStack;
    }
}