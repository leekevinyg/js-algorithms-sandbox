interface IGraph {
    // object of node (string) to edges (string[])
    adjList : object
    topoSort() : string
    addEdge(edge : string[]) : void
}

class Graph implements IGraph {
    adjList : object;
    vertexList : object;
    isCyclic : boolean;

    constructor() {
        this.adjList = {};
        this.vertexList = {};
        this.isCyclic = false;
    }

    public addEdge(edge : string[]) : void {
        const head = edge[0];
        const tail = edge[1];

        if (!this.vertexList[head]) {
            this.vertexList[head] = true;
        }
        if (!this.vertexList[tail]) {
            this.vertexList[tail] = true;
        }

        if (this.adjList[head]) {
            this.adjList[head] = [
                ...this.adjList[head],
                tail
            ]
        } else {
            this.adjList[head] = [tail];
        }
    }

    private topoSortDFS(node : string, visited : boolean[], tempStack : string[], recStack : string[]) : void {
        visited[node] = true;
        let neighbors = this.adjList[node];

        recStack[node] = true;

        for (let i=0; neighbors && i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (recStack[neighbor]) {
                this.isCyclic = true;
                return;
            }
            if (visited[neighbor] === false) {
                this.topoSortDFS(neighbor, visited, tempStack, recStack);
            }
        }

        recStack[node] = false;
        tempStack.push(node);
    }

    public topoSort() : string {
        let visited = [];
        let tempStack = [];
        let vertexList = Object.keys(this.vertexList);
        let recStack = [];

        vertexList.forEach(letter => {
            visited[letter] = false;
        })

        for (let i=0; i < vertexList.length; i++) {
            const letter = vertexList[i];
            if (visited[letter] === false) {
                this.topoSortDFS(letter, visited, tempStack, recStack);
            }
        }

        if (this.isCyclic) {
            return '';
        }

        let topoSorted = [];
        while (tempStack.length > 0) {
            topoSorted.push(tempStack.pop());
        }
        return topoSorted.join('');
    }
}

export default Graph;