interface IMedianFinder {
    addNum(num : number) : void,
    findMedian() : number,
}
export const binaryInsertionSortIndex = (array : number[], start : number, end : number, target : number) => {
    if (array.length === 1) {
        if (array[0] < target) {
            return 1;
        } else {
            return 0;
        }
    }
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
        // search to the right of pivot...make sure we don't go out of bounds
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
        const insertIndex = binaryInsertionSortIndex(this.array, 0, this.array.length - 1, num);
        this.array.splice(insertIndex, 0, num);
    }
    findMedian(): number {
        if (this.array.length === 0) {
            return 0;
        }
        if (this.array.length === 1) {
            return this.array[0];
        }
        // at least 2 long.
        let mid = Math.ceil(this.array.length / 2) - 1;
        if (this.array.length % 2 === 0) {
            // return mean of 2 middle elements
            return ((this.array[mid] + this.array[mid+1]) / 2);
        } else {
            return this.array[mid];
        }
    }
}