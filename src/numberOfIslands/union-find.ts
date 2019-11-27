interface IUnionFind {
    union(nodeA: number, nodeB: number) : void;
    isConnected(nodeA: number, nodeB: number) : boolean;
}

class UnionFind implements IUnionFind {
    id: Array<number>;
    size: Array<number>;

    constructor(numberOfNodes : number) {
        this.id = new Array(numberOfNodes);
        this.size = new Array(numberOfNodes);
        for (let i = 0; i < numberOfNodes; i++) {
            this.id[i] = i;
            this.size[i] = 1;
        }
    }

    root(node: number): number {
        // chase the pointer to the parent until it doesn't change
        while (node !== this.id[node]) {
            node = this.id[node];
        }
        return node;
    }

    isConnected(nodeA: number, nodeB: number) : boolean {
        return this.root(nodeA) === this.root(nodeB);
    }

    union(nodeA: number, nodeB: number) : void {
        let rootA : number = this.root(nodeA);
        let rootB : number = this.root(nodeB);

        if (rootA === rootB) {
            return;
        }

        if (this.size[rootA] > this.size[rootB]) {
            // B's tree becomes a part of A's tree
            this.id[rootB] = rootA;
            this.size[rootA] += this.size[rootB];
        } else if (this.size[rootA] <= this.size[rootB]) {
            // A's tree becomes a part of B's tree;
            this.id[rootA] = rootB;
            this.size[rootB] += this.size[rootA];
        }
    }

    getTotalComponents() : number[] {
        let rootsSoFar = [];
        for (let i=0; i<this.id.length; i++) {
            if (!rootsSoFar.includes(this.id[i])) {
                rootsSoFar.push(this.id[i]);
            }
        }
        return rootsSoFar;
    }
}

export default UnionFind;