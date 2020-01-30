import { twoSum } from '../../src/twoSum';
import { expect } from 'chai';

describe('two sum', () => {
    it('properly returns the indicies', () => {
        const numsArray = [2, 7, 11, 15];
        expect(twoSum(numsArray, 9).includes(0)).to.be.true;
        expect(twoSum(numsArray, 9).includes(1)).to.be.true;
    });
});

