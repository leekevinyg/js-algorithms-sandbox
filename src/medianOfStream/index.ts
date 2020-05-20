interface IMedianFinder {
    addNum(num : number) : void,
    findMedian() : number,
}

/*
    Binary Search: Given a sorted array, provides the position the target should be inserted at
    
    Case 1: Empty
        [] and target 10 should return 0
        
    EVEN ARRAYS:
        Case 2: Insert at the end 
            [0, 1] and target 2 should return 2
        Case 3: Insert in the middle 
            [0, 1, 3, 4] and target 2 should return 2
        Case 4: Insert at the beginning
            [2, 3] and target 1 should return 0
    
    ODD ARRAYS:
        Case 5: Insert at end
        [4, 10, 15] and target 20 should return 3
        Case 6: Insert in middle
        [4, 10, 15] and target 10 should return 1.
        Case 7: Insert at the beginning
            [4, 10, 15] and target 1 should return 0.
*/
export const binaryInsertionSortIndex = (array : number[], start : number, end : number, target : number) => {
    let pivot = Math.ceil(start + ((end - start) / 2));
    if (array[pivot] >= target && array[pivot - 1] <= target) {
        return pivot;
    } else if (array[pivot] > target) {
        // search to the left of pivot...make sure we don't go out of bounds
        if (pivot - 1 >= 0) {
            return binaryInsertionSortIndex(array, 0, pivot - 1, target);
        } else {
            return 0;
        }
    } else {
        // search to the right of pivot
        if (pivot + 1 <= end) {
            return binaryInsertionSortIndex(array, pivot + 1, end, target);
        } else {
            return array.length;
        }
    }
}

export class MedianFinder implements IMedianFinder {
    private array : number[];
    constructor() {
        this.array = [];
    }
    addNum(num: number): void {
        throw new Error("Method not implemented.");
    }
    findMedian(): number {
        throw new Error("Method not implemented.");
    }
}