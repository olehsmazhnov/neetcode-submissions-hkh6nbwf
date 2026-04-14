class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const obj = {};
        obj["["] = "]";
        obj["{"] = "}";
        obj["("] = ")";
        const openList = Object.keys(obj);
        const stack = [];
        const arr = s.split("");
        
        let isValid = true;
        
        for (let i = 0; i < arr.length ; i++) {
            const char = arr[i];
            const isOpen = openList.includes(char);
            if(isOpen){
                stack.push(char);
            } else {
                const opened = stack.pop();
            if(obj[opened] !== char){
                isValid = false;
            }
            }
        }
        
        return isValid  && stack.length === 0;
    }
}
