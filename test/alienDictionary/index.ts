import { expect } from 'chai';
import { generateEdges } from '../../src/alienDictionary/alien-dictionary';

describe('Alien Dictionary', () => {
    it('properly creates the edges given an array of words of length 1', () => {
        const words = [
            "a",
            "b",
            "c",
        ];
        expect(generateEdges(words).toString()).to.equal([["a", "b"], ["b", "c"]].toString());
    });

    it('properly creates the edges given an English alphabet', () => {
        const words = [
            "cop",
            "cow",
            "goat",
            "good",
            "sheep",
            "shit",
        ];
        expect(generateEdges(words).toString()).to.equal([["p", "w"], ["c", "g"], ["a", "o"], ["g", "s"], ["e", "i"]].toString());
    });

    it('properly creates the edges given an alien alphabet', () => {
        const words = [
            "wrt",
            "wrf",
            "er",
            "ett",
            "rftt"
        ];
        expect(generateEdges(words).toString()).to.equal([["t", "f"], ["w", "e"], ["r", "t"], ["e", "r"]].toString());
    });
});