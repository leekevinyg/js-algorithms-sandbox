export const threeSum = (nums : number[]) : number[][] => {
    let solutionSet = [];
    let solutionHashMap = {};
    if (!nums || nums.length < 3) {
        return solutionSet;
    }
    // sort the array
    const sortedNums = nums.sort();

    // Iterate through the array
    for (let i=0; i<nums.length; i++) {
        let twoSumComplement = 0 - nums[i];
        let twoSumIndicies = twoSum(sortedNums, twoSumComplement);
        if (twoSumIndicies.length === 0) {
            continue;
        }
        // this check ensures no repeated usage of the SAME number
        if (twoSumIndicies[0] !== i && twoSumIndicies[1] !== i) {
            let solution = [nums[i], nums[twoSumIndicies[0]], nums[twoSumIndicies[1]]];
            let key = solution.sort().toString();
            if (!solutionHashMap[key]) {
                solutionSet.push(solution);
                solutionHashMap[key] = true;
            }            
        }
    }
    return solutionSet;
}

// handles the 2 sum problem given a SORTED array of nums
const twoSum = (nums : number[], target : number) : number[] => {
    let left = 0;
    let right = nums.length - 1;

    while (right > left) {
        let currentSum = nums[left] + nums[right];
        if (currentSum > target) {
            // we want a smaller sum, decrease right pointer by 1
            right--;
        } else if (currentSum < target) {
            left++;
        } else {
            return [left, right];
        }
    }

    return [];
}