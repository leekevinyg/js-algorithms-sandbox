export const isPalindrome = (s) => {
    let cleanString = s.replace(/[^0-9a-zA-Z]+/gmi,"").toLowerCase();
    let l=0;
    let r= cleanString.length - 1;
    
    while (l < r) {
      if (cleanString.charAt(l) !== cleanString.charAt(r)) {
          return false;
      }
      l++;
      r--;
    }
    return true;
};