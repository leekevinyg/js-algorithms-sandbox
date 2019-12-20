interface IGraph {
    adjList : object,
    aCyclic: boolean,
    totalNodes : number,
    addEdge(edge : number[]) : void,
    isConnectedAndACyclic() : void,
}

class Graph implements IGraph {
    adjList : object;
    aCyclic : boolean;
    totalNodes : number;

    constructor (numNodes : number) {
        this.aCyclic = true;
        this.totalNodes = numNodes;
        this.adjList = {};
    }
    addEdge (edge : number[]) {
        const a = edge[0];
        const b = edge[1];
        if (this.adjList[a]) {
            this.adjList[a] = [
                ...this.adjList[a],
                b,
            ];
        } else {
            this.adjList[a] = [b];
        }
        if (this.adjList[b]) {
            this.adjList[b] = [
                ...this.adjList[b],
                a,
            ];
        } else {
            this.adjList[b] = [a];
        }
    }
    
    DFS(startNode : number, visited : boolean[], recStack : boolean[], parent: number) {
        if (visited[startNode]) {
            return true;
        }
        
        visited[startNode] = true;
        recStack[startNode] = true;
        
        const neighbors = this.adjList[startNode];
        for (let i=0; neighbors && i < neighbors.length; i++) {
            if (recStack[neighbors[i]] && parent !== neighbors[i]) {
                this.aCyclic = false;
            }
            if (!visited[neighbors[i]]) {
                this.DFS(neighbors[i], visited, recStack, startNode);
            }
        }
        
        recStack[startNode] = false;
        return true;
    }
    
    isConnectedAndACyclic () {
        let visited = [];
        for (let i=0; i<this.totalNodes; i++) {
            visited[i] = false;
        }
        
        let recStack = [];
        for (let i=0; i<this.totalNodes; i++) {
            this.DFS(i, visited, recStack, -1);
        }
        
        // if no unvisited nodes, it means our graph is connected
        const isConnected = visited.filter(n => n === false).length === 0;
        return this.aCyclic && isConnected;
    }
}

export default Graph;