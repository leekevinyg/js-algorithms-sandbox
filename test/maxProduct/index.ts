import { maxProduct } from '../../src/maxProduct';
import { expect } from 'chai';

describe('max product in subarray', () => {
    it('returns 0 when given empty input', () => {
        expect(maxProduct([])).to.equal(0);
        expect(maxProduct(undefined)).to.equal(0);
    });

    it('returns max product - all positive numbers', () => {
        expect(maxProduct([1, 1, 2, 1, 1, 10])).to.equal(20);
    });

    it('returns max product - one negative number', () => {
        expect(maxProduct([1, 1, 2, -1, 1, 10])).to.equal(10);
    });
    
    it('returns max product - 2 negative numbers that form max product', () => {
        expect(maxProduct([1, 1, 2, -1, 1, -10])).to.equal(20);
    });
    
    it('returns max product - 2 numbers that form max product separated by negative numbers', () => {
        expect(maxProduct([1, 1, 2, -1, -1, 10])).to.equal(20);
        expect(maxProduct([1, 1, 2, -1, 1, 10])).to.equal(10);
    });

    it('returns max product - array contains 0', () => {
        expect(maxProduct([3, 0, -2, -20, -20, 3])).to.equal(1200);
    });
});