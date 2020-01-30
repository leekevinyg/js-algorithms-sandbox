export const productOfArrayExceptSelf = (numsArray : number[]) => {
    if (numsArray.length === 1) {
        return [numsArray[0]];
    }

    let newArray = [];
    for (let i=0; i < numsArray.length; i++) {
        let multiplicationResult : number = 1;
        for (let j=0; j < numsArray.length; j++) {
            if (i !== j) {
                multiplicationResult = multiplicationResult * numsArray[j];
            }
        }
        newArray.push(multiplicationResult);
    }
    return newArray;
}