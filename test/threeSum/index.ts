import { threeSum } from '../../src/threeSum';
import { expect } from 'chai';

describe('Three Sum', () => {
    it('should handle invalid input', () => {
        expect(threeSum([]).toString()).to.equal([].toString());
        expect(threeSum([1, 2]).toString()).to.equal([].toString());
    });
    it('should handle permutations properly', () => {
        expect(threeSum([0, 0, 0]).toString()).to.equal([[0, 0, 0]].toString());
        expect(threeSum([-1, 0, 1, 2, -1, -4]).toString()).to.equal([
            [-1, -1, 2],
            [-1, 0, 1]
          ].toString());
    });
})