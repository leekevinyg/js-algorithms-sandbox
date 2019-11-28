const getIdFromCoordinate = (row : number, col : number, totalColumns: number) : number => {
    return totalColumns * row + col;
}
// Runs BFS from a given coordinate value, and returns true if a pathway to both oceans exists from that coordiante
const existsPathwayToOceans = (row : number, column : number, matrix : number[][]) : boolean => {
    const visited = [];
    const totalRows = matrix.length;
    const totalColumns = matrix[0] ? matrix[0].length : 0;
    const queue = [[row, column]];
    let haveTouchedAtlantic = false;
    let haveTouchedPacific = false;
    
    while (queue.length > 0) {
        const currentCoordinate = queue.pop();
        let x = currentCoordinate[0];
        let y = currentCoordinate[1];
        let currentValue = matrix[x][y];
        let id = getIdFromCoordinate(x, y, totalColumns);

        if (visited.includes(id)) {
            continue;
        }

        visited.push(id);
        if (!haveTouchedAtlantic && touchesAtlantic(x, y, matrix)) {
            haveTouchedAtlantic = true;
        }
        if (!haveTouchedPacific && touchesPacific(x, y, matrix)) {
            haveTouchedPacific = true;
        }
        if (haveTouchedAtlantic && haveTouchedPacific) {
            return true;
        }

        let rightValue = y + 1 < totalColumns ? matrix[x][y+1] : null;
        let leftValue = y - 1 >= 0 ? matrix[x][y-1] : null;
        let topValue = x - 1 >= 0 ? matrix[x-1][y] : null;
        let bottomValue = x + 1 < totalRows ? matrix[x+1][y] : null;

        if (typeof leftValue === "number" && leftValue <= currentValue) {
            queue.unshift([x, y-1]);
        }
        if (typeof rightValue === "number" && rightValue <= currentValue) {
            queue.unshift([x, y + 1]);
        }
        if (typeof topValue === "number" && topValue <= currentValue) {
            queue.unshift([x-1, y]);
        }
        if (typeof bottomValue === "number" && bottomValue <= currentValue) {
            queue.unshift([x+1, y]);
        }
    }

    return false;
}

const touchesPacific = (row : number, column : number, matrix : number[][]) => {
    return column === 0 || row === 0;
}

const touchesAtlantic = (row : number, column : number, matrix : number[][]) => {
    return column === matrix[0].length - 1 || row === matrix.length - 1
}

const pacificAtlantic = (matrix : number[][]) : number[][] => {
    const positions = [];
    const totalRows = matrix.length;
    const totalColumns = matrix[0] ? matrix[0].length : 0;

    for (let row=0; row < totalRows; row++) {
        for (let column=0; column < totalColumns; column++) {
            if (existsPathwayToOceans(row, column, matrix)) {
                positions.push([row, column]);
            }
         }
    }
    return positions;
}

export default pacificAtlantic;