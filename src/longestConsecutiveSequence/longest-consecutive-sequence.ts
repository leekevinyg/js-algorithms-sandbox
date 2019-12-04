import UnionFind from './union-find';

// Brute Force Solution
export const longestConsecutiveSequence_BF = (array : number[]) : number => {
    // convert input to set to enjoy O(1) lookup
    const numbers : Set<number> = new Set(array);
    let longestSequenceSoFar : number = 0;

    // We will attempt to count as high as possible using only numbers in nums
    for (let i=0; i < array.length; i++) {
        let sequenceCount = 1;
        let currentNum = array[i];
        while (numbers.has(currentNum + 1)) {
            currentNum++;
            sequenceCount++;
        }
        if (sequenceCount > longestSequenceSoFar) {
            longestSequenceSoFar = sequenceCount;
        }
    }
    return longestSequenceSoFar;
}

// Union Find Solution
export const longestConsecutiveSequence_UF = (array : number[]) : number => {
    if (!array || array.length === 0) {
        return 0;
    }
    const seen : Map<number, number> = new Map();
    const uf : UnionFind = new UnionFind(array.length);

    for (let i = 0; i < array.length; i++) {
        const value : number = array[i];
        if (seen.get(value)) {
            // duplicate key, ignore as it doesn't increase the length of our sequence.
            continue;
        }

        if (seen.has(value-1)) {
            const indexOfSeenValue : number = seen.get(value - 1);
            uf.union(i, indexOfSeenValue);
        }
            
        if (seen.has(value+1)) {
            const indexOfSeenValue : number = seen.get(value+1);
            uf.union(i, indexOfSeenValue);
        }

        seen.set(value, i);
    }

    return uf.getSizeOfLargestComponent();
}