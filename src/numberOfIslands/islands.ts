const getIdFromCoordinate = (row : number, col : number, totalColumns: number) : number => {
    return totalColumns * row + col;
}

const getNeighboringIslands = (row : number, column : number, graph : number[][]) => {
    const totalRows : number = graph.length;
    const totalColumns : number = graph[0].length;
    const neighboringIslands = [];

    let northNode = null;
    let northEastNode = null;
    let eastNode = null;
    let southEastNode = null;
    let southNode = null;
    let southWestNode = null;
    let westNode = null;
    let northWestNode = null;

    if (row - 1 >= 0 && graph[row-1][column] === 1) {
        northNode = {
            id: getIdFromCoordinate(row-1, column, totalColumns),
            row: row-1,
            column
        }
        neighboringIslands.push(northNode);
    }

    if (row - 1 >= 0 && column + 1 <= totalColumns - 1 && graph[row-1][column+1] === 1) {
        northEastNode = {
            id: getIdFromCoordinate(row-1, column+1, totalColumns),
            row: row-1,
            column: column+1
        }
        neighboringIslands.push(northEastNode);
    }

    if (column + 1 <= totalColumns - 1 && graph[row][column+1] === 1) {
        eastNode = {
            id: getIdFromCoordinate(row, column+1, totalColumns),
            row,
            column: column + 1
        }
        neighboringIslands.push(eastNode);
    }

    if (column + 1 <= totalColumns - 1 && row + 1 <= totalRows - 1 && graph[row+1][column+1] === 1) {
        southEastNode = {
            id: getIdFromCoordinate(row+1, column+1, totalColumns),
            row: row + 1,
            column: column + 1
        }
        neighboringIslands.push(southEastNode);
    }

    if (row + 1 <= totalRows - 1 && graph[row+1][column] === 1) {
        southNode = {
            id: getIdFromCoordinate(row+1, column, totalColumns),
            row: row+1,
            column
        }
        neighboringIslands.push(southNode);
    }

    if (row + 1 <= totalRows - 1 && column-1 >= 0 && graph[row+1][column-1] === 1) {
        southWestNode = {
            id: getIdFromCoordinate(row+1, column-1, totalColumns),
            row: row+1,
            column: column-1
        }
        neighboringIslands.push(southWestNode);
    }

    if (column - 1 >= 0 && graph[row][column-1] === 1) {
        westNode = {
            id: getIdFromCoordinate(row, column-1, totalColumns),
            row,
            column: column - 1 
        }
        neighboringIslands.push(westNode);
    }

    if (column - 1 >= 0 && row -1 >= 0 && graph[row-1][column-1] === 1) {
        northWestNode = {
            id: getIdFromCoordinate(row-1, column-1, totalColumns),
            row: row - 1,
            column: column - 1 
        }
        neighboringIslands.push(northWestNode);
    }

    return neighboringIslands;
}

export const getNumberOfIslands = (graph : number[][]) : number => {
    const totalRows : number = graph.length;
    const totalColumns : number = graph[0].length;

    let uniqueTreesCounter = 0;
    let visited : number[] = [];

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
            if (isIslandNode && !visited.includes(startNode.id)) {
                // explore tree from island node with bfs and, for each connected component explored, increment uniqueTreesCounter.
                let queue = [startNode];
                while (queue.length > 0) {
                    const nextNode = queue.pop();
                    if (visited.includes(nextNode.id)) {
                        continue;
                    }
                    visited.push(nextNode.id);
                    let neighbors = getNeighboringIslands(nextNode.row, nextNode.column, graph);
                    for (let i=0; i<neighbors.length; i++) {
                        queue.unshift(neighbors[i]);
                    }
                }
                uniqueTreesCounter++;
            }
        }
    }

    return uniqueTreesCounter;
}