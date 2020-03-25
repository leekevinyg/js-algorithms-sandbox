/*

Largest M-aligned Subset
- Find the largest subset size of an array such that the difference between any 2 point within the subset is divisible by M

Example: 
Input: [-3, -2, 1, 0, 8, 7, 1]
M = 3

*/

const M_AlignedSubset = (arr : number[], m : number) : number => {
    if (arr.length < 2 || m <= 0) {
        return 0;
    }

    if (m === 1) {
        return arr.length;
    }

    let maxSize = 0;
    let visited = [];
    for (let i=0; i<arr.length;i++) {
        if (visited[i] === true) continue;
        visited[i] = true;
        let currSubsetSize = 1;
        for (let j=i+1; j<arr.length; j++) {
            if (visited[j] === true) continue;
            let divisibleByM = (arr[j] - arr[i]) % m === 0;
            if (divisibleByM) {
                visited[j] === true;
                currSubsetSize++;
            }
        }
        maxSize = Math.max(maxSize, currSubsetSize);
    }
    return maxSize;
}