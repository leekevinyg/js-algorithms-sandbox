export default class Solution {
    private longestSoFar : number = 0;

    public maxLength(arr : string[]) {
        if (arr === null || arr.length === 0) {
            return 0;
        }

        // Run DFS to find all solutions
        this.dfs(arr, "", 0);
        return this.longestSoFar;
    }

    private isUnique = (string : string) : boolean => {
        let map = {};
        for (let i=0; i<string.length; i++) {
            let letter = string[i];
            if (map[letter]) {
                return false;
            }
            map[letter] = true;
        }
        return true;
    }
    
    private dfs = (arr : string[], path : string, index : number) : void => {
        if (this.isUnique(path)) {
            this.longestSoFar = Math.max(this.longestSoFar, path.length);
        } else {
            // prune the tree
            return;
        }
    
        if (index === arr.length) {
            // we've reached the maximum length of the substr
            return;
        }

        // Explore the decision space for each level.
        // Each subsequent level has one less choice since we've already made some choices i.e., used some words up
        for (let i=index; i<arr.length; i++) {
            this.dfs(arr, path + arr[i], i+1)
        }
    }
}


