interface IGraph {
    addEdge(edge : number[]) : void;
    isCyclicDFS(startNode : number) : boolean;
}

export class Graph implements IGraph {
    // a map of a vertex (key) to it's number[] of neighboring tail verticies
    private adjList : object;
    private visited : number[];
    private currentPath : number[];

    constructor() {
        this.adjList = {};
        this.visited = [];
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
        let isCyclic : boolean = false;
        let stack : number[] = [startNode];
        this.currentPath = [];

        while (stack.length > 0) {
            let currNode : number = stack.pop();
            if (this.currentPath.includes(currNode)) {
                isCyclic = true;
                break;
            }
            if (this.visited.includes(currNode)) {
                continue;
            }
            this.visited.push(currNode);
            this.currentPath.push(currNode);
            let neighbors : number[] = this.adjList[currNode];
            if (!neighbors) {
                // we are at a leaf node, and about to backtrack, clear current node from recursion stack
                this.currentPath = this.currentPath.filter(node => node !== currNode);
                continue;
            }
            for (let i=0; i < neighbors.length; i++) {
                stack.push(neighbors[i]);
            }
        }
        return isCyclic;
    }
}