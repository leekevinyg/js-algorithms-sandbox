export const solveKnapsack = function(profits : number[], weights : number[], capacity : number) : number {
    let bestProfit : number = 0;
    const knapsackHelper = (bagSize : number, currentProfit : number, level : number) => {
      if (bagSize > capacity) {
        return;
      }
      if (level === weights.length) {
        // we have finished picking all items
        if (currentProfit > bestProfit) {
          bestProfit = currentProfit;
        }
        return;
      }
      // pick current item
      knapsackHelper(bagSize + weights[level], currentProfit + profits[level], level + 1);
      // don't pick current item
      knapsackHelper(bagSize, currentProfit, level + 1);
    }
    knapsackHelper(0, 0, 0);
    return bestProfit;
  };