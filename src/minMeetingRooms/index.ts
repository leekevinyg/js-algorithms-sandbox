
import { MinPriorityQueue } from './priority-queue';
/**
 * @param {number[][]} intervals
 * @return {number}
 */
export const minMeetingRooms = function(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    
    if (intervals.length === 1) {
        return 1;
    }
    
    // sort the intervals by start time.
    intervals.sort((a, b) => a[0] - b[0]);

    let pqueue = new MinPriorityQueue();

    for (let i=0; i<intervals.length; i++) {
        if (pqueue.isEmpty()) {
            pqueue.insert({
                priority: intervals[i][1],
                data: intervals[i],
            });
        } else if (pqueue.peek().data[1] <= intervals[i][0]) {
            // room is free
            pqueue.remove();
            pqueue.insert({
                priority: intervals[i][1],
                data: intervals[i],
            });
        } else {
            pqueue.insert({
                priority: intervals[i][1],
                data: intervals[i],
            });
        }
    }
    return pqueue.length();
}