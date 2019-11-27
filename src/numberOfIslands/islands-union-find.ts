import UnionFind from "./union-find";

const getId = (row: number, column: number, totalColumns: number) : number => (
    row*totalColumns + column);

export const getNumberOfIslandsUF = (grid : string[][]) : number => {
    if (grid.length === 0) {
        return 0;
    }

    let totalComponents = grid[0].length * grid.length;
    let totalColumns = grid[0].length;
    let maxColumnValue = grid[0].length - 1;
    let maxRowValue = grid.length - 1;
    let valuesAtNodeIds : Array<string> = new Array();

    let uf = new UnionFind(totalComponents);
    for (let row = 0; row <= maxRowValue; row++) {
        for (let column = 0; column <= maxColumnValue; column++) {
            let currentNodeId = getId(row, column, totalColumns);
            let currentNodeValue = grid[row][column];
            valuesAtNodeIds[currentNodeId] = currentNodeValue;
            // check the node to the right
            if (column+1 <= maxColumnValue && grid[row][column+1] === currentNodeValue) {
                let newNodeId = getId(row, column+1, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
            // check the node to the left
            if (column-1 >= 0 && grid[row][column-1] === currentNodeValue) {
                let newNodeId = getId(row, column-1, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
            // check the node above
            if (row-1 >= 0 && grid[row-1][column] === currentNodeValue) {
                let newNodeId = getId(row-1, column, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
            // check the node below
            if (row+1 <= maxRowValue && grid[row+1][column] === currentNodeValue) {
                let newNodeId = getId(row+1, column, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
        }
    }

    // get the total number of connected components, and then subtract any water components
    // to get the total number of islands
    let uniqueRoots = uf.getTotalComponents();
    let numberOfWaterComponents = 0;
    for (let rootId in uniqueRoots) {
        if (valuesAtNodeIds[rootId] === '0') {
            numberOfWaterComponents++;
        }
    }
    return uniqueRoots.length - numberOfWaterComponents;
}