export const maxProduct = (nums : number[]) : number => {
    if (!nums || nums.length === 0) {
        return 0;
    }

    let prevMax = nums[0];
    let prevMin = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    let ans = nums[0];

    for (let i=1; i<nums.length; i++) {
        currMax = Math.max(
            nums[i],
            prevMax * nums[i],
            prevMin * nums[i]
        );
        currMin = Math.min(
            nums[i],
            prevMax * nums[i],
            prevMin * nums[i]
        );
        ans = Math.max(ans, currMax);
        prevMax = currMax;
        prevMin = currMin;
    }

    return ans;
}