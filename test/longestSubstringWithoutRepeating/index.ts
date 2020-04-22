
import { lengthOfLongestSubstring } from '../../src/longestSubstringWithoutRepeating';
import { expect } from 'chai'

describe('longest substring without repeating characters', () => {
    it('properly returns the longest substring', () => {
        expect(lengthOfLongestSubstring('')).to.equal(0);
        expect(lengthOfLongestSubstring('a')).to.equal(1);
        expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
    });
});
