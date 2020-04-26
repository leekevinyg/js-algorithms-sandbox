export const isPalindrome = function(s : string) {
  if (!s || s.length === 1) return true;
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (r > l) {
      if (s[l] === s[r]) {
          l++;
          r--;
      } else {
          return false;
      }
  }
  
  return true;
};