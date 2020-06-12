import { exist } from '../../src/wordSearch';
import { expect } from 'chai';

describe('word search', () => {
    it.only('determines whether a word exists in a board represented by a 2D array', () => {
        const board = [["C","A","A"],["A","A","A"],["B","C","D"]];
        const word = "AAB";
        expect(exist(board, word)).equal(true);
    })
})