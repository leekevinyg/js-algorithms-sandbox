import { binaryInsertionSortIndex } from '../../src/medianOfStream';
import { expect } from 'chai';

describe('binary search insertion sort index', () => {
    it.only('given a sorted array, provides the position the target num should be inserted at', () => {
        // TEST EMPTY
        let array = [];
        let target = 10;
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