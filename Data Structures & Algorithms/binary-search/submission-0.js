class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const makeSearch = (begin, end) => {
            const mid = Math.floor((end - begin) / 2) + begin;
            
            
            console.log("m: ", mid);
            console.log("begin: ", begin);
            console.log("end: ", end);
            console.log("----");
        
            
        
            if(nums[mid] === target) {
                return mid; 
            }
            if(begin > end || end < begin || end === begin){
                return -1;
            }
            if(nums[mid] < target){
                return makeSearch(mid + 1, end);
            } 
            if(nums[mid] > target) {
                return makeSearch(0, mid);
            }
        }
        
        return makeSearch(0, nums.length - 1);
    }
}
