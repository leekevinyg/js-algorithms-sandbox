export const twoSumSortedArray = (numbers : number[], target : number ) : number[] => {
    let left = 0;
    let right = numbers.length - 1;
    
    while (right > left) {
        let currSum = numbers[left] + numbers[right];
        if (currSum === target) return [left + 1, right + 1];
        if (currSum > target) {
            right--;
        } else {
            left++
        }
    }
    return [];
}