import { twoSumBinarySearch } from '../../src/twoSumSortedArray'
import { expect } from 'chai';

describe('two sum binary search', () => {
    it.only('returns the indices of the numbers that match the target sum', () => {
        expect(twoSumBinarySearch([2, 7, 11, 15], 9).toString()).to.equal([0, 1].toString());
    });
});