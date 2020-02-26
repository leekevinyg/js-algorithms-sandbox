import { binarySearch, searchRotatedArray } from '../../src/searchInRotatedSortedArray';
import { expect } from 'chai';

describe('binary search', () => {
    it('returns index of target', () => {
        expect(binarySearch([0, 1, 2, 3, 4, 5], 0)).to.equal(0);
        expect(binarySearch([0, 1, 2, 3, 4, 5], 4)).to.equal(4);
    })
})

describe('search rotated array', () => {
    it('returns index of target', () => {
        expect(searchRotatedArray([4,5,6,7,0,1,2], 0)).to.equal(4);
        expect(searchRotatedArray([4,5,6,7,8,9,0,1,2], 9)).to.equal(5);
    })
})