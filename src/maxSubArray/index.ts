export const maxSubArray = (nums : number[]) : number => {
    if (!nums || nums.length === 0) {
        return 0;
    }

    let maxSum = nums[0];
    let sumSoFar = nums[0];
    for (let i=1; i<nums.length; i++) {
        sumSoFar = Math.max(nums[i], sumSoFar + nums[i]);
        if (sumSoFar > maxSum) {
            maxSum = sumSoFar;
        }
    }
    return maxSum;
}