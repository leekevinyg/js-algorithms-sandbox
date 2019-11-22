import UnionFind from "./union-find";

const getIdFromCoordinate = (row: number, column: number, totalColumns: number) : number => (
    totalColumns*row + column);

export const getNumberOfIslands = (graph : number[][]) : number => {
    let connectedComponents : Set<number>;
    let waterComponents : number = 0;
    let totalRows : number = graph.length;
    let totalColumns : number = graph.length > 0 ? graph[0].length : 0;
    let numberOfComponents = totalRows * totalColumns;
    let uf : UnionFind = new UnionFind(numberOfComponents);
    let valuesAtIds : number[] = new Array(numberOfComponents);
    
    for (let row = 0; row < totalRows; row++) {
        for (let column = 0; column < totalColumns; column++) {
            let currentNodeId = getIdFromCoordinate(row, column, totalColumns);
            let currentNodeValue = graph[row][column];
            valuesAtIds[currentNodeId] = currentNodeValue;
            let newNodeId;
            // check the node directly below
            if (column+1 < totalColumns && graph[row][column+1] === currentNodeValue) {
                newNodeId = getIdFromCoordinate(row, column+1, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
            // check the node directly above
            if (column-1 >= 0 && graph[row][column-1] == currentNodeValue) {
                newNodeId = getIdFromCoordinate(row, column-1, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
            // check the node to the left
            if (row-1 >= 0 && graph[row-1][column] == currentNodeValue) {
                newNodeId = getIdFromCoordinate(row-1, column, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
            // check the node to the right
            if (row+1 < totalRows && graph[row+1][column] == currentNodeValue) {
                newNodeId = getIdFromCoordinate(row+1, column, totalColumns);
                uf.union(currentNodeId, newNodeId);
            }
        }
    }

    connectedComponents = uf.getUniqueRoots();
    connectedComponents.forEach(componentId => {
        if (valuesAtIds[componentId] === 0) {
            waterComponents++;
        }
    });
    return connectedComponents.size - waterComponents;
}