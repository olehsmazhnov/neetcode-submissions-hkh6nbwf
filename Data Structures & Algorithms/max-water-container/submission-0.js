class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxValue = 0;
        let l = 0;
        let r = heights.length - 1;
        
        while(l < r){
            const width = r - l
            const area = Math.min(heights[r], heights[l]) * width;
            maxValue = Math.max(area, maxValue);

            if(heights[l] <= heights[r]){
                l++;                    
            } else {
                r--;    
            }
        }
        
        return maxValue;
    }
}
