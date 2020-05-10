export const subarraySum = function(nums : number[], k : number) : number {    
    let sumCounts : {[key : number] : number} = {
        0: 1
    };
    let sum : number = 0;
    let count : number = 0;
    for (let i=0; i<nums.length; i++) {
        sum+=nums[i];
        let neededSum : number = sum - k;
        if (Number.isInteger(sumCounts[neededSum])) {
            count+=sumCounts[neededSum];
        }
        
        if (Number.isInteger(sumCounts[sum])) {
            sumCounts[sum]++
        } else {
            sumCounts[sum] = 1;
        }
    }
    return count;
}