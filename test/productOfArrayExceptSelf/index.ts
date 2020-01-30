import { productOfArrayExceptSelf } from '../../src/productOfArrayExceptSelf';
import { expect } from 'chai';

describe('Product of array except self', () => {
    it('returns just the item if n=1', () => {
        expect(productOfArrayExceptSelf([1]).toString()).to.be.equal([1].toString());
    });

    it('n=2', () => {
        expect(productOfArrayExceptSelf([1, 2]).toString()).to.be.equal([2, 1].toString());
    });

    it('n=3', () => {
        expect(productOfArrayExceptSelf([1, 2, 3]).toString()).to.be.equal([6, 3, 2].toString());
    });
});