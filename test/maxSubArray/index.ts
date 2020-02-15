import { maxSubArray } from '../../src/maxSubArray';
import { expect } from 'chai';

describe('max sub array', () => {
    it('returns 0 when given empty input', () => {
        expect(maxSubArray([])).to.equal(0);
        expect(maxSubArray(undefined)).to.equal(0);
    });

    it('returns the max sub array sum', () => {
        expect(maxSubArray([-1, -2, -3, 4])).to.equal(4);
        expect(maxSubArray([-1, -2, 2, 4])).to.equal(6);
    });
});