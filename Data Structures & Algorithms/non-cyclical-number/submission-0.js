class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const calc = (prop) => {
            const arr = String(prop).split('');
            console.log(arr);
            
            const calcRes = arr.reduce((res, item) => {
                res += Number(item) * Number(item);
            return res;
            }, 0)
            console.log("calcRes: ", calcRes)
            return calcRes;
        }
        let d = 0;
        const cache = {};
        let result = false;
        const startLoop = (prop) => {
            d++;
            if(d === 100) {
                console.log("ERROR");
            return;
            }
            const val = calc(prop);
            if(val === 1){
                result = true;
                return true;
            } else {
                if(cache[val]){
                result = false;
                return false;
            }
                cache[val] = true;
            startLoop(val);
            }
        }
        
            startLoop(n);
        return result; 
    }
}
