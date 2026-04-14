class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const res = [];
        let mem = 0;
            for (let i = digits.length - 1 ; i >= 0 ; i--) {
            let newVal;		
            if(i === digits.length - 1){
                newVal = digits[i] + 1;
            console.log("newVal: ", newVal);
            if(newVal === 10){
                mem = 1;
                res.push(0);
            } else {
                res.push(newVal);
            }
            } else {
                if(mem){
                newVal = digits[i] + mem;
                mem = 0;
                if(newVal === 10){
                    mem = 1;
                    res.unshift(0);
                } else {
                    res.unshift(newVal);
                }
                
            } else {
                res.unshift(digits[i]);
            }	
            }
            console.log(i);
        }
        console.log("mem: ", mem)
        if(mem){
            res.unshift(1);
        }
	return res;
    }
}
