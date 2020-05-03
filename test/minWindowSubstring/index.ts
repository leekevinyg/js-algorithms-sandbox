import { minWindow } from '../../src/minWindowSubstring';
import { expect } from 'chai';

describe('min window', () => {
    it('should return the minimum window', () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).equal("BANC");
    });
    it('should return the minimum window', () => {
        expect(minWindow("AA", "AA")).equal("AA");
    });
});