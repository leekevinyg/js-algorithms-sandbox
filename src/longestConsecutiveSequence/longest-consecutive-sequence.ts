import UnionFind from './union-find';

export const longestConsecutiveSequence = (array : number[]) : number => {
    if (!array || array.length === 0) {
        return 0;
    }
    const seen : Map<number, number> = new Map();
    const uf : UnionFind = new UnionFind(array.length);

    for (let i = 0; i < array.length; i++) {
        const value : number = array[i];
        if (seen.has(value)) {
            // duplicate key, ignore.
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