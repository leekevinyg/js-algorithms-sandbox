/*

Divide array into the maximum number of chunks that can be sorted and then concatenated to make the whole array sorted

Example: [2,4,1,6,5,9,7] can be partitioned into [2,4,1], [6,5] and [9,7] such that if the chunks were sorted and 
combined, the entire array would be sorted.

*/


const maxChunksToSorted = (nums : number[]) : number => {
    let sortedNums = [...nums].sort();
    let maxSumsAtEachIndex = [];
    let count = 0;
    let runningSum = 0;

    for (let i=0; i<sortedNums.length; i++) {
        runningSum += sortedNums[i];
        maxSumsAtEachIndex[i] = runningSum;
    }

    runningSum = 0;
    for (let i=0; i<nums.length; i++) {
        runningSum += nums[i];
        if (maxSumsAtEachIndex[i] === runningSum) {
            count++;
        }
    }

    return count;
}


