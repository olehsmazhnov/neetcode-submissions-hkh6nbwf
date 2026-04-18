class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr1 = [1];
  
        let res1 = 1;
        
        let res2 = nums.at(-1);

        let j = nums.length - 2;

        for(let i = 0 ; i < nums.length - 1; i++){
            res1 = res1 * nums[i];
            
            arr1[i+1] = arr1[i+1] !== undefined ? arr1[i+1] * res1 : res1;
            arr1[j] = arr1[j] !== undefined ? arr1[j] * res2 : res2;

            res2 = res2 * nums[j];  
            
            j--;
        }

        return arr1;      
    }
}
