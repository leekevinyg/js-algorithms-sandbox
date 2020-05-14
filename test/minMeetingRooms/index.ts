import { PriorityQueue } from '../../src/minMeetingRooms/priority-queue';
import { expect } from 'chai';

describe('Priority Queue', () => {
    it('should return undefined when peeked with no elements', () => {
        const pqueue = new PriorityQueue();
        expect(pqueue.isEmpty()).equal(true);
        expect(pqueue.peek()).equal(undefined);
    });

    it('should return the minimum item in the queue', () => {
        const pqueue = new PriorityQueue();
        pqueue.insert(10);
        pqueue.insert(20);
        pqueue.insert(1);
        pqueue.insert(2);
        expect(pqueue.peek()).equal(1);
        pqueue.remove();
        expect(pqueue.peek()).equal(2);
    });
});