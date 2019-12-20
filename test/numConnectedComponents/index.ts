import { countComponents } from '../../src/numConnectedComponents/numConnectedComponents';
import { expect } from 'chai';

describe('number of connected components', () => {
    it('should return 1 for a fully connected component', () => {
        const edges = [[0, 1], [1, 2]];
        expect(countComponents(2, edges)).to.equal(1);
    });

    it('should return 2 for a graph with 2 connected components', () => {
        const edges = [[0, 1], [1, 2], [3, 4]];
        expect(countComponents(5, edges)).to.equal(2);
    });
});