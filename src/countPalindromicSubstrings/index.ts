export const countSubstrings = function(s : string) : number {
    if (!s) return 0;
    if (s.length === 1) return 1;
    let palindromes : number = 0;
    
    for (let i=0; i<s.length; i++) {
        let string : string = s[i];
        // find even palindromes from this index;
        let evenPalindromeCount = expandFromMiddle(i, i+1, s);
        palindromes+= evenPalindromeCount;
        let oddPalindromeCount = expandFromMiddle(i, i, s);
        palindromes+= oddPalindromeCount;
    }
    return palindromes;
};

let expandFromMiddle = (l : number, r : number, s : string) : number  => {
    let count : number = 0;
    while (s[l] === s[r] && l >= 0 && r <= s.length - 1) {
        count++;
        l--;
        r++;
    }
    return count;
}