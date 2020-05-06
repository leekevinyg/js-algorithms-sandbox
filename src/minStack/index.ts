interface IStackNode {
    val: number,
    min: number,
}

interface IMinStack {
    push(val:number) : void,
    pop() : void,
    top() : number,
    getMin() : number,
}

class MinStack implements IMinStack {
    private stack : IStackNode[];

    constructor() {
        this.stack = [];
    }

    push(val : number) {
        const node : IStackNode = {
            val,
            min: val < this.getMin() ? val : this.getMin();
        }
        this.stack.push(node);
    }

    pop() {
        this.stack.pop();
    }

    top() {
        if (this.stack.length === 0) {
            return 0;
        } else {
            return this.stack[this.stack.length - 1].val
        }
    }

    getMin() {
        if (this.stack.length === 0) {
            return Number.POSITIVE_INFINITY;
        } else {
            return this.stack[this.stack.length - 1].min;
        }
    }
}