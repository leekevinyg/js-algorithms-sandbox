import { smallest } from '../../src/smallestSubArrayWithGivenSum';
import { expect } from 'chai';

describe('smallest subarray with given sum', () => {
    it.only('returns smallest subarray with given sum', () => {
        expect(smallest(7, [2,1,5,2,3,2])).to.equal(2);
    });
});