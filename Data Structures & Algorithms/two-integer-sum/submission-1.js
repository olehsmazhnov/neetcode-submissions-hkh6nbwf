class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let p1 = 0;
        let p2 = 1;
        
        for(let i = p1 ; i < nums.length ; i++) {
            for(let y = p2 ; y < nums.length ; y++) {
                if(nums[i] + nums[y] === target){
                    return [i, y];
                }
                if(y === nums.length - 1){
                    p1++;
                    p2++;
                }
            }
        }
        
        return null;
    }
}
