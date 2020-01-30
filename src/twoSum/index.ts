export const twoSum = (nums : number[], target : number) => {
    // Store hashtable of numbers we have seen already and their indices
    let hashTable = {}; 
    /*
    For each number, calculate its complement
    If we have seen the complement already, then return the current index i, and the complement index stored in the hashtable
    Else, add the number and it’s index into the hashtable
    Beware:
    The index of a number may be 0 which is falsy, but we need to return true for it.
    */
 
    for (let i=0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (Number.isInteger(hashTable[complement])) {
            return [i, hashTable[complement]];
        }
        hashTable[nums[i]] = i;
    }
}