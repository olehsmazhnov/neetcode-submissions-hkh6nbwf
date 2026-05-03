class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;
        let res = [];

        while(!res.length) {
            const s = numbers[l] + numbers[r];
            if(s === target){
            res = [l + 1, r +1];
            } else if(s > target) {
            r--;
            } else {
            l++;
            }
        }

        return res;            
    }
}
