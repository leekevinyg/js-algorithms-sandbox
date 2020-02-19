import { twoSumBinarySearch } from '../../src/twoSumSortedArray'
import { expect } from 'chai';

describe('two sum binary search', () => {
   it('returns the indices of the numbers that match the target sum', () => {
        expect(twoSumBinarySearch([2, 7, 11, 15], 9).toString()).to.equal([1, 2].toString());
        expect(twoSumBinarySearch([2, 3, 4], 6).toString()).to.equal([1, 3].toString());
   });
});