const getIdFromCoordinate = (row : number, col : number, totalColumns: number) : number => {
    return totalColumns * row + col;
}

const getNeighboringIslands = (row : number, column : number, graph : number[][]) => {
    const totalRows : number = graph.length;
    const totalColumns : number = graph[0].length;
    const neighboringIslands = [];

    let northNode = null;
    let eastNode = null;
    let southNode = null;
    let westNode = null;

    if (row - 1 >= 0 && graph[row-1][column] === 1) {
        northNode = {
            id: getIdFromCoordinate(row-1, column, totalColumns),
            row: row-1,
            column
        }
        neighboringIslands.push(northNode);
    }

    if (column + 1 <= totalColumns - 1 && graph[row][column+1] === 1) {
        eastNode = {
            id: getIdFromCoordinate(row, column+1, totalColumns),
            row,
            column: column + 1
        }
        neighboringIslands.push(eastNode);
    }

    if (row + 1 <= totalRows - 1 && graph[row+1][column] === 1) {
        southNode = {
            id: getIdFromCoordinate(row+1, column, totalColumns),
            row: row+1,
            column
        }
        neighboringIslands.push(southNode);
    }

    if (column - 1 >= 0 && graph[row][column-1] === 1) {
        westNode = {
            id: getIdFromCoordinate(row, column-1, totalColumns),
            row,
            column: column - 1 
        }
        neighboringIslands.push(westNode);
    }

    return neighboringIslands;
}

export const getNumberOfIslandsDFS = (graph : number[][]) : number => {
    if (graph.length === 0) {
        return 0;
    }
    const totalRows : number = graph.length;
    const totalColumns : number = graph[0].length;

    let uniqueTreesCounter = 0;

    for (let row : number = 0; row<totalRows; row++) {
        for (let column : number = 0; column<totalColumns; column++) {
            const id = getIdFromCoordinate(row, column, totalColumns);
            const nodeValue = graph[row][column];
            const isIslandNode : boolean = (nodeValue === 1);
            const startNode = {
                id,
                row,
                column,
            };
            if (isIslandNode) {
                // explore tree from island node with dfs and, for each connected component explored, increment uniqueTreesCounter.
                let queue = [startNode];
                while (queue.length > 0) {
                    const nextNode = queue.pop();
                    let neighbors = getNeighboringIslands(nextNode.row, nextNode.column, graph);
                    for (let i=0; i<neighbors.length; i++) {
                        queue.push(neighbors[i]);
                    }
                    graph[nextNode.row][nextNode.column] = 0;
                }
                uniqueTreesCounter++;
            }
        }
    }

    return uniqueTreesCounter;
}