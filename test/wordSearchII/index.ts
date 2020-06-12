import { findWords } from '../../src/wordSearchII/';
import { expect } from 'chai';

describe('word search II', () => {
    it.only('finds all the words given in a 2D array', () => {
        expect(findWords(
            [["a","b"],["a","a"]],
            ["aba","baa","bab","aaab","aaa","aaaa","aaba"]
        ).length).to.equal(5);
    })
})