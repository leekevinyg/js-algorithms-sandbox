
import { MinPriorityQueue } from './priority-queue';
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    
    if (intervals.length === 1) {
        return 1;
    }
    
    // sort the intervals by start time.
    intervals.sort((a, b) => a[0] - b[0]);

    let roomsNeeded = 0;
    let pqueue = new MinPriorityQueue();

    for (let i=0; i<intervals.length; i++) {
        if (pqueue.isEmpty()) {
            roomsNeeded++;
        } else if (pqueue.peek().priority >= intervals[i][0]) {
            // if the earliest ending meeting overlaps with the meeting we are trying to schedule allocate a new room
            roomsNeeded++;
        } else if (pqueue.peek().data[0] === intervals[i][0] && pqueue.peek().data[1] === intervals[i][1]) {
            // meetings completely overlap.
            roomsNeeded++;
        }
        pqueue.insert({
            priority: intervals[i][1], // end time
            data: intervals[i],
        });
    }
    return roomsNeeded;
};