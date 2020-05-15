let ans;

export const subsets = function(nums) {
    ans = [];
    helper(nums, [], 0);
    return ans;
};
const helper = (nums, subset, level) => {
    if (level === nums.length) {
        ans.push(subset);
        return;
    }
    // for each level, we can include the number at that level or not.
    // to maintain the same length subsets for all our combinations 
    helper(nums, [...subset, null], level+1);
    helper(nums, [...subset, nums[level]], level+1);
}