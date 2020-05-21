import { MinPriorityQueue, MaxPriorityQueue } from './priority-queue';

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
    private maxHeap;
    private minHeap;
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }
    addNum(num: number): void {
        this.maxHeap.insert(num, num);
        const topOfMaxHeap = this.maxHeap.remove();
        this.minHeap.insert(topOfMaxHeap, topOfMaxHeap);
        if (this.minHeap.length() > this.maxHeap.length()) {
            const topOfMinHeap = this.minHeap.remove();
            this.maxHeap.insert(topOfMinHeap, topOfMinHeap);
        }
    }
    findMedian(): number {
        let size = this.maxHeap.length() + this.minHeap.length();
        if (size % 2 === 0) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        } else {
            return this.maxHeap.peek();
        }
    }
}

