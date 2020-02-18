import { minRotatedSortedArray } from '../../src/minRotatedSortedArray';
import { expect } from 'chai';

describe('min rotated sorted array', () => {
    it('should return the minimum number in the array when input is of length 1', () => {
        expect(minRotatedSortedArray([3])).equal(3);
    })
    it('should return the minimum number in the array', () => {
        expect(minRotatedSortedArray([3, 4, 5, 1, 2])).equal(1);
    })
});