export const maxProduct = (nums : number[]) : number => {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let maxProduct = nums[0];
    for (let i=0; i<nums.length; i++) {
        let maxProductSoFar = nums[i];
        if (maxProductSoFar > maxProduct) {
            maxProduct = maxProductSoFar;
        }
        for (let j=i+1; j<nums.length; j++) {
            maxProductSoFar = maxProductSoFar * nums[j];
            if (maxProductSoFar > maxProduct) {
                maxProduct = maxProductSoFar;
            }
        }
    }
    return maxProduct;
}