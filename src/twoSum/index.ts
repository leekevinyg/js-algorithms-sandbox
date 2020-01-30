export const twoSum = (nums : number[], target : number) => {
    let hashTable = {}; // map number value to it's index
    // go through the nums list
    // if the number is not seen, add it to the hashTable and record it's index
    // check if the complement has been seen before if it has, return the current index and 
    for (let i=0; i < nums.length; i++) {
        let number = nums[i];
        if (!hashTable[number]) {
            hashTable[number] = i;
        }
        let complement = target - number;
        let indexOfComplement = hashTable[complement]
        if (Number.isInteger(indexOfComplement)) {
            if (i !== indexOfComplement) {
                return [i, indexOfComplement];
            }
        }
    }
}