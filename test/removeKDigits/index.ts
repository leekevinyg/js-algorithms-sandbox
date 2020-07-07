import { removeKdigits } from '../../src/removeKDigits';
import { expect } from 'chai';

describe('remove k digits', () => {
    it('should remove digits and return the smallest number as a string', () => {
        expect(removeKdigits("112", 1)).equal("11");
        expect(removeKdigits("1111111", 3)).equal("1111");
        expect(removeKdigits("1234567890", 9)).equal("0");
    });
});