interface IFreqStackNode {
    num : number,
    count: number,
}

interface IFreqStack {
    count: { [key: number]: number; },
    stack: IFreqStackNode[],
    push(num : number) : void,
    pop() : number
}

class FreqStackNode implements IFreqStackNode {
    num: number;
    count: number;
    constructor(num, count) {
        this.num = num;
        this.count = count;
    }
}

export class FreqStack implements IFreqStack {
    count: { [key: number]: number; };
    stack: FreqStackNode[];
    constructor() {
        this.count = [];
        this.stack = [];
    }
    
    push(num : number) : void {
        if (this.count[num]) {
            this.count[num]++;
        } else {
            this.count[num] = 1;
        }
        
        if (this.stack.length === 0) {
            this.stack.push({
                num,
                count: this.count[num],
            });
        } else {
            let lastItem : FreqStackNode = this.stack[this.stack.length - 1];
            let tempStack = [];
            
            while (lastItem.count > this.count[num]) {
                tempStack.push(this.stack.pop());
                lastItem = this.stack[this.stack.length - 1];
            }
            
            this.stack.push({
                num,
                count: this.count[num],
            });
            
            while (tempStack.length > 0) {
                this.stack.push(tempStack.pop());
            }
        }
    }
    
    pop() : number {
        const item : FreqStackNode = this.stack.pop();
        this.count[item.num]--
        return item.num;
    }
}