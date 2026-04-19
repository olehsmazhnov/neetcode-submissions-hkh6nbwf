class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const arrSet = new Set(nums);

        let maxRes = 0;
        
        for(let num of arrSet){
            let res = 1;
            if(arrSet.has(num - 1)) {
            continue;
            }
            while(arrSet.has(num + res)) {
            res++;
            }

            maxRes = Math.max(maxRes, res);
        }

        return maxRes;               
    }
}
