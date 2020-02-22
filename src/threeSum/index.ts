export const threeSum = (nums : number[]) : number[][] => {
    let solutionSet = [];
    if (!nums || nums.length < 3) {
        return solutionSet;
    }
    // sort the array
    const sortedNums = nums.sort((a, b) => a - b);

    // Iterate through the array
    for (let i=0; i<=sortedNums.length - 3; i++) {
        let twoSumComplement = 0 - sortedNums[i];
        if (i > 0 && sortedNums[i] === sortedNums[i-1]) {
            continue;
        }
        let left = i + 1;
        let right = sortedNums.length - 1;
        while (left < right) {
            let currentSum = sortedNums[left] + sortedNums[right];
            if (currentSum === twoSumComplement) {
                solutionSet.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                let currentRight = right;
                let currentLeft = left;
                while (sortedNums[right] === sortedNums[currentRight] && left < right) {
                    right--;
                }
                 while (sortedNums[left] === sortedNums[currentLeft] && left < right) {
                    left++;
                }
            } else if (currentSum > twoSumComplement) {
                let currentRight = right;
                while (sortedNums[right] === sortedNums[currentRight] && left < right) {
                    right--;
                }
            } else if (currentSum < twoSumComplement) {
                let currentLeft = left;
                while (sortedNums[left] === sortedNums[currentLeft] && left < right) {
                    left++;
                }
            }
        }
    }
    return solutionSet;
}