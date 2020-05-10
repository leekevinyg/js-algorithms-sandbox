import { smallest, smallest_sliding_window } from '../../src/smallestSubArrayWithGivenSum';
import { expect } from 'chai';

describe('smallest subarray with given sum', () => {
    it('returns smallest subarray with given sum', () => {
        expect(smallest_sliding_window(7, [2,1,5,2,3,2])).to.equal(2);
    });
});