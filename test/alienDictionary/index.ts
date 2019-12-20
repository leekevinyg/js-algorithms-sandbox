import { expect } from 'chai';
import { generateEdges, alienOrder } from '../../src/alienDictionary/alien-dictionary';
import Graph from '../../src/alienDictionary/graph';

xdescribe('[OLD] Alien Dictionary - generate edges', () => {
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

describe('Alien Dictionary - Topological sort', () => {
    it('sorts a DAG with 2 nodes', () => {
        const graph = new Graph();
        const edges = [['a','b'], ['b', 'c']];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort()).to.equal('abc');
    });

    it('sorts a DAG with 3 nodes', () => {
        const graph = new Graph();
        const edges = [['a','z'], ['a','b'], ['b','c'], ];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort()).to.equal('abcz');
    });

    it('sorts a DAG with 4 nodes', () => {
        const graph = new Graph();
        const edges = [['t','f'], ['w','e'], ['r','t'], ['e', 'r']];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort()).to.equal('wertf');
    });

    it('doesnt sort a cyclic graph', () => {
        const graph = new Graph();
        const edges = [['a','b'], ['b','a']];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort()).to.equal('');
    });
});

describe('Alien Dictionary', () => {
    it('returns lexicographical order of alien language', () => {
        const words = [
            "wrt",
            "wrf",
            "er",
            "ett",
            "rftt"
        ];
        expect(alienOrder(words)).to.equal('wertf');
    });

    it('returns empty string when lexicographical order of alien language is detected to be invalid', () => {
        const words = [
            "z",
            "x",
            "z",
        ];
        expect(alienOrder(words)).to.equal('');
    });

    it('returns lexicographical order of alien language', () => {
        const words = [
            "z",
            "x",
        ];
        expect(alienOrder(words)).to.equal('zx');
    });

    it('returns lexicographical order of alien language', () => {
        const words = [
            "zy",
            "zx",
        ];
        expect(alienOrder(words)).to.equal('yxz');
    });
});