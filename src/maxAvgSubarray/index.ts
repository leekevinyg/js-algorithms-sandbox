export const findMaxAverage = function(nums : number[], k : number) : number {
    let maxAvg : number = Number.NEGATIVE_INFINITY;
    let runningSum : number = 0;
    let left : number  = 0;
    let right : number = 0;
    
    while (left < nums.length - k + 1) {
        runningSum+=nums[right];
        if (right - left + 1 === k) {
            let avg = runningSum / k;
            if (avg > maxAvg) {
                maxAvg = avg;
            }
            runningSum-=nums[left];
            left++;
            right++;
        } else {
            right++;
        }
    }
    return maxAvg;
};