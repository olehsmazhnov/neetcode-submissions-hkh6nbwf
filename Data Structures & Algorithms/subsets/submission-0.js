class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        return nums.reduce((res, item) => {
            const newRes = res.map((resItem) => {
                return [...resItem, item]; 
            })
            return [...res, ...newRes];
        }, [[]]);
    }
}
