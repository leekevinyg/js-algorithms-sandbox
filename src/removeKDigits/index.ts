export const removeKdigits = function(num : string, k : number) : string {
    if (num.length === k) return "0";
    const stack = [];
    let numArray : string[] = Array.from(num);
    
    while (numArray.length > 0) {
        if (stack.length === 0) {
            stack.push(numArray.shift());
        }
        
        const topOfStack = stack[stack.length - 1];
        const nextNum = numArray[0];
        
        console.log(`top of stack is ${topOfStack}, nextNum is ${nextNum}`)
        
        if (nextNum < topOfStack && k > 0) {
            console.log(`removing top of stack`);
            stack.pop();
            stack.push(numArray.shift())
            k--;
        } else {
            stack.push(numArray.shift());
        }
    }

    while (k > 0) {
        stack.pop();
        k--;
    }
    
    while (stack[0] === "0") {
        stack.shift();
    }
    
    const ans = stack.join('')
    
    return ans === "" ? "0" : ans;
};