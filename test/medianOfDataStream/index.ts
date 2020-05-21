import { binaryInsertionSortIndex, MedianFinder } from '../../src/medianOfStream';
import { expect } from 'chai';

describe('binary search insertion sort index', () => {
    /*

    Binary Insertion Sort: Given a sorted array, provides the position the target should be inserted at
    
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

    it('given a sorted array, provides the position the target num should be inserted at', () => {
        // TEST EMPTY
        let array = [];
        let target = 10;
        expect(binaryInsertionSortIndex(array, 0, 0, target)).equal(0);

        // TEST LENGTH 1
        array = [1];
        target = 10;
        expect(binaryInsertionSortIndex(array, 0, 0, target)).equal(1);
        array = [1];
        target = 0;
        expect(binaryInsertionSortIndex(array, 0, 0, target)).equal(0);
    
        // EVEN ARRAYS
        array = [0, 1];
        target = 2;
        // test inserting at end
        expect(binaryInsertionSortIndex(array, 0, array.length - 1, target)).equal(2);
        array = [0,1,3,4];
        target = 2;
        // test inserting in the middle
        expect(binaryInsertionSortIndex(array, 0, array.length - 1, target)).equal(2);
        // test inserting at the beginning
        array = [2,3];
        target = 1;
        expect(binaryInsertionSortIndex(array, 0, array.length - 1, target)).equal(0);
    
        // ODD ARRAYS
        array = [4, 10, 15];
        target = 20;
        // test inserting at end
        expect(binaryInsertionSortIndex(array, 0, array.length - 1, target)).equal(3);
        array = [4, 10, 15];
        target = 10;
        // test inserting in the middle
        expect(binaryInsertionSortIndex(array, 0, array.length - 1, target)).equal(1);
        // test inserting at the beginning
        array = [4, 10, 15];
        target = 1;
        expect(binaryInsertionSortIndex(array, 0, array.length - 1, target)).equal(0);
    });
});

describe('Median Finder', () => {
    it('finds the median', () => {
        let finder = new MedianFinder();
        finder.addNum(-1);
        expect(finder.findMedian()).equal(-1);
        finder.addNum(-2);
        expect(finder.findMedian()).equal(-1.5);
        finder.addNum(-3);
        expect(finder.findMedian()).equal(-2);
    });
    it('finds the median', () => {
        let finder = new MedianFinder();
        finder.addNum(117);
        expect(finder.findMedian()).equal(117);
        finder.addNum(309);
        expect(finder.findMedian()).equal(213);
        finder.addNum(156);
        expect(finder.findMedian()).equal(156);
        finder.addNum(76);
        expect(finder.findMedian()).equal(136.5);
        finder.addNum(3);
        expect(finder.findMedian()).equal(117);
        finder.addNum(201);
        expect(finder.findMedian()).equal(136.5);
        finder.addNum(29);
        expect(finder.findMedian()).equal(117);
        finder.addNum(281);
        expect(finder.findMedian()).equal(136.5);
        finder.addNum(272);
        expect(finder.findMedian()).equal(156);
        finder.addNum(242);
        expect(finder.findMedian()).equal(178.5);
    });
})


