export const longestPalindrome = function(s : string) : string {
    if (!s) return '';
    if (s.length === 1) return s;
    let maxString : string = '';
    let evenPalindrome  : string = '';
    let oddPalindrome : string = '';
    
    for (let i=0; i<s.length; i++) {
        let l=i;
        let r=i;
        oddPalindrome = expandFromMiddle(l, r, s);
        evenPalindrome = expandFromMiddle(l, r+1, s);
        if (evenPalindrome.length > maxString.length) {
            maxString = evenPalindrome;
        }
        if (oddPalindrome.length > maxString.length) {
            maxString = oddPalindrome;
        }
    }
    return maxString;
};

let expandFromMiddle = (l : number, r : number, s : string) : string => {
    let string : string = '';
    while (s[l] === s[r] && l >= 0 && r <= s.length - 1) {
        string = s.slice(l, r+1);
        l--;
        r++;
    }
    return string;
}