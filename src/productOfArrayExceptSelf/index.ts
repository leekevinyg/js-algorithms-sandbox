export const productOfArrayExceptSelf = (numsArray : number[]) => {
    let leftProductArray = [];
    let rightProductArray = [];
    // keeps track of product to the left of i
    for (let i=0; i < numsArray.length; i++) {
        if (i === 0) {
            leftProductArray[i] = 1;
        } else {
            leftProductArray[i] = leftProductArray[i - 1] * numsArray[i - 1];
        }
    }
    
    // keeps track of product to the right of i
    for (let i=numsArray.length - 1; i >= 0; i--) {
        if (i === numsArray.length - 1) {
            rightProductArray[i] = 1;
        } else {
            rightProductArray[i] = rightProductArray[i + 1] * numsArray[i + 1]
        }
    }
    
    // construct our return array
    let newArray = [];
    for (let i=0; i < numsArray.length; i++) {
        newArray[i] = leftProductArray[i] * rightProductArray[i];
    }

    return newArray;
}