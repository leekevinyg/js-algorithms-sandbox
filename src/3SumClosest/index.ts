/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const threeSumClosest = function(nums : number[], target : number) : number {
    nums.sort((a, b) => a - b);
    
    let minDiff : number = Number.POSITIVE_INFINITY;
    let ans : number = 0;
    
    for (let i=0; i<nums.length - 2; i++) { 
        let left : number = i + 1;
        let right : number = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            } else {
                const diff = Math.abs(target - sum);
                if (diff < minDiff) {
                    minDiff = diff;
                    ans = sum;
                }
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return ans;
};
