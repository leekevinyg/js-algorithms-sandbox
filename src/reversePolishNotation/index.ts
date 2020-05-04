/**
 * @param {string[]} tokens
 * @return {number}
 */
export const evalRPN = function(tokens : string[]) : number {
    let stack : number[] = [];
    for (let i=0; i<tokens.length; i++) {
        const token : string = tokens[i];
        if (isOperator(token)) {
            const secondNumber : number = stack.pop();
            const firstNumber : number = stack.pop();
            let evaluated : number;
            switch (token) {
                case "+": 
                    evaluated = firstNumber + secondNumber;
                    break;
                case "-":
                    evaluated = firstNumber - secondNumber;
                    break;
                case "*":
                    evaluated = firstNumber * secondNumber;
                    break;
                case "/":
                    evaluated = Math.trunc(firstNumber / secondNumber);
                    break;
                default:
                    break;
            }
            stack.push(evaluated);
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack.pop();
};

const isOperator = (token : string) : boolean => token === "+" || token === "-" || token === "*" || token === "/";