import { validTree } from '../../src/graphValidTree/graphValidTree';
import { expect } from 'chai';

describe('graph valid tree', () => {
    it('should return false for a graph with cycles', () => {
        const edges = [[0, 1], [1, 2]];
        expect(validTree(2, edges)).to.equal(false);
    });

    it('should return false for a disconnected graph', () => {
        const edges = [[0, 1], [1, 2], [3, 4]];
        expect(validTree(5, edges)).to.equal(false);
    });

    it('should return true for a valid tree', () => {
        const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
        expect(validTree(5, edges)).to.equal(true);
    });
});