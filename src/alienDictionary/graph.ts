interface IGraph {
    // object of node (string) to edges (string[])
    adjList : object
    topoSort() : string
    addEdge(edge : string[]) : void
}

class Graph implements IGraph {
    totalVerticies : number;
    adjList : object;
    alphabetTable : object;

    constructor() {
        this.totalVerticies = 26; // alien dictionary uses latin alphabet
        this.alphabetTable = {
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4,
            'e': 5,
            'f': 6,
            'g': 7,
            'h': 8,
            'i': 9,
            'j': 10,
            'k': 11,
            'l': 12,
            'm': 13,
            'n': 14,
            'o': 15,
            'p': 16,
            'q': 17,
            'r': 18,
            's': 19,
            't': 20,
            'u': 21,
            'v': 22,
            'w': 23,
            'x': 24,
            'y': 25,
            'z': 26,
        };
        this.adjList = {};
    }

    public addEdge(edge : string[]) : void {
        const head = edge[0];
        const tail = edge[1];
        const existingEdges = this.adjList[head];

        if (existingEdges) {
            this.adjList[head] = [
                ...this.adjList[head],
                tail
            ]
        } else {
            this.adjList[head] = [tail];
        }
    }

    private topoSortDFS(node : number, visited : boolean[], topoSorted : string[]) : void {
        visited[node] = true;
        const letter = this.alphabetTable[node];
        let neighbors = this.adjList[letter];

        if (!neighbors) return;

        for (let i=0; i < neighbors.length; i++) {
            const node = neighbors[i];
            this.topoSortDFS(this.alphabetTable[node], visited, topoSorted);
        }

        topoSorted.push(letter);
    }

    public topoSort() : string {
        let visited = [];
        let topoSorted = [];

        for (let i=0; i < this.totalVerticies; i++) {
            visited[i] = false;
        }

        for (let i=0; i < this.totalVerticies; i++) {
            if (visited[i] === false) {
                this.topoSortDFS(i, visited, topoSorted);
            }
        }

        return topoSorted.join('');
    }
}

export default Graph;