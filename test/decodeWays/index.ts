import { numDecodings } from '../../src/decodeWays';
import { expect } from 'chai';

describe('numDecodings', () => {
    it.only('should decode the number of ways a string of numbers can be parsed', () => {
        expect(numDecodings('12')).to.equal(2);
    });
})