interface IGraph {
    addEdge(edge : number[]) : void;
    DFS(startNode : number, visited : object) : void;
}

class Graph implements IGraph {
    totalNodes : number;
    adjList : object;
    constructor(numNodes : number) {
        this.totalNodes = numNodes;
        this.adjList = {};
    }

    public addEdge(edge: number[]) : void {
        const nodeA = edge[0];
        const nodeB = edge[1];
        
        if (this.adjList[nodeA]) {
            this.adjList[nodeA] = [
                ...this.adjList[nodeA],
                nodeB,
            ]
        } else {
            this.adjList[nodeA] = [nodeB];
        }

        if (this.adjList[nodeB]) {
            this.adjList[nodeB] = [
                ...this.adjList[nodeB],
                nodeA,
            ]
        } else {
            this.adjList[nodeB] = [nodeA];
        }
    }

    DFS(startNode : number, visited : object) {
        if (visited[startNode]) {
            return;
        }
        visited[startNode] = true;
        const neighbors = this.adjList[startNode];
        for (let i=0; neighbors && i < neighbors.length; i++) {
            if (visited[neighbors[i]] === false) {
                this.DFS(neighbors[i], visited);
            }
        }
    }
}

export default Graph;