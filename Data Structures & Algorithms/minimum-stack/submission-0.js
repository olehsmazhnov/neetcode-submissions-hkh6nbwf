class MinStack {
    constructor() {
        this.minStack = [];
        this.mainStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.mainStack.push(val);
        
        if(!this.minStack.length) {
            this.minStack.push(val)
        } else if (val <= this.minStack.at(-1)) {
            this.minStack.push(val);            
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.mainStack.pop();
        
        if(val === this.minStack.at(-1)){
            this.minStack.pop();
        }
        
        return val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.mainStack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1);
    }
}
