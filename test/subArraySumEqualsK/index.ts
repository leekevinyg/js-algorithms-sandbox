import { subarraySum } from '../../src/subarraySumEqualsK';
import { expect } from 'chai';

describe('subarray sum equals k', () => {
    it('returns the number of subarrays that add up to k', () => {
        expect(subarraySum([-1,-1,1], 0)).to.equal(1);
    });
});