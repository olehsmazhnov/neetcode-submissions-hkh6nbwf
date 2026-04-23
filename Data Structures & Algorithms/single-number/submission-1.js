class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const hash = new Set();

        nums.forEach((item) => {
            if(hash.has(item)){
            hash.delete(item);
            } else {
            hash.add(item);
            }
        });

        const [res] = hash;
        return res;            
    }
}
