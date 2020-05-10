import { lengthOfLongestSubstringKDistinct } from '../../src/substringWithKDistinct';
import { expect } from 'chai';

describe('length of longest substring with k distinct chars', () => {
    it.only('should return the length of the longest substring with k discint', () => {
        expect(lengthOfLongestSubstringKDistinct('a', 0)).to.equal(0);
        expect(lengthOfLongestSubstringKDistinct('a', 1)).to.equal(1);
        expect(lengthOfLongestSubstringKDistinct('aa', 1)).to.equal(2);
        expect(lengthOfLongestSubstringKDistinct('aaa', 1)).to.equal(3);
        expect(lengthOfLongestSubstringKDistinct('eceba', 2)).to.equal(3);
        expect(lengthOfLongestSubstringKDistinct('bacc', 2)).to.equal(3);
    });
});