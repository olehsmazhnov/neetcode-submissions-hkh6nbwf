class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const res = {};
        for(let i=0; i < nums.length;i++){
            if(!res[nums[i]]){
                res[nums[i]] = 1;
            } else {
                return true; 
            }
        }
        return false;
    }
}
