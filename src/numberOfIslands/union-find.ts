interface IUnionFind {
    union(nodeA: number, nodeB: number) : void;
    isConnected(nodeA: number, nodeB: number) : boolean;
}

class UnionFind implements IUnionFind {
    graph: Array<number>;
    treeSize: Array<number>;

    constructor(numberOfNodes : number) {
        this.graph = new Array(numberOfNodes);
        this.treeSize = new Array(numberOfNodes);
        for (let i = 0; i < numberOfNodes; i++) {
            this.graph[i] = i;
            this.treeSize[i] = 1;
        }
    }

    root(node: number): number {
        // chase the pointer to the parent until it doesn't change
        while (this.graph[node] !== node) {
            node = this.graph[node];
        }
        return node;
    }

    union(nodeA: number, nodeB: number) : void {
        let sizeOfA : number;
        let sizeOfB : number;

        sizeOfA = this.treeSize[nodeA];
        sizeOfB = this.treeSize[nodeB];

        if (sizeOfA >= sizeOfB) {
            // put nodeB in nodeA's tree. Putting the smaller tree under 
            this.graph[nodeB] = this.root(nodeA);
        }
        this.graph[nodeA] = this.root(nodeB);
    }

    isConnected(nodeA: number, nodeB: number) : boolean {
        return this.root(nodeA) === this.root(nodeB);
    }

    getUniqueRoots() : Set<number> {
        return new Set(this.graph);
    }
}

export default UnionFind;