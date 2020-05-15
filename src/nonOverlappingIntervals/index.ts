import { subsets } from '../subsets';

export const eraseOverlapIntervals_Greedy = function(intervals) {
    if (!intervals || intervals.length === 0 || intervals.length === 1) return 0;
    
    let erased = 0;
    intervals.sort((a, b) => a[1] - b[1]);
    
    let scheduledIntervals = [intervals[0]];
    for (let i=1; i<intervals.length; i++) {
        let lastInterval = scheduledIntervals[scheduledIntervals.length - 1];
        if (overlap(lastInterval, intervals[i])) {
            erased++;
        } else {
            scheduledIntervals.push(intervals[i]);
        }
    }
    return erased;
};

export const eraseOverlapIntervals_BruteForce = function(intervals) {
    if (!intervals || intervals.length === 0 || intervals.length === 1) return 0;
    
    let minRemovals = Number.POSITIVE_INFINITY;
    // generate all subsets
    let combos = subsets(intervals);
    for (let i=0; i<combos.length; i++) {
        let combo = combos[i];
        // find the number of removals
        let numRemovals = 0;
        for (let j=0; j<combo.length; j++) {
            if (combo[j] === null) {
                numRemovals++;
            }
        }
        // see if the combo is non-overlapping
        combo = combo.filter(interval => interval !== null);
        combo.sort((a,b) => a[0] - b[0]);

        let overlapping = false;
        for (let k=0; k<combo.length - 1; k++) {
            if (overlap(combo[k], combo[k+1])) {
                overlapping = true;
                break;
            }
        }
        
        if (!overlapping && numRemovals < minRemovals) {
            minRemovals = numRemovals;
        }
    }
    
    return minRemovals;
};

const overlap = (i1, i2) => {
    if (i1[1] > i2[0]) {
        return true;
    }
    return false;
}