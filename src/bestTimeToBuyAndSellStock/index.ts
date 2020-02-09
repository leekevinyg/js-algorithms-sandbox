export const maxProfit = (prices) => {
    if (!prices || prices.length === 0) return 0;
    
    let maxToRight = [];
    maxToRight[prices.length - 1] = prices[prices.length - 1]; 
    for (let i=prices.length - 2; i>=0; i--) {
        maxToRight[i] = Math.max(maxToRight[i+1], prices[i]);
    }
    
    let maxProfit = 0;
    for (let j=0; j<prices.length; j++) {
        const profit = maxToRight[j] - prices[j];
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};