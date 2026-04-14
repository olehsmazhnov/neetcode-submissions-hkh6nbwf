class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = {};
        
        const innerFib = (n) => {
            if(n <= 2){
            return n;
            }
            if(!cache[n-1]){
            cache[n-1] =innerFib(n-1);	
            }
            
            if(!cache[n-2]){
            cache[n-2] = innerFib(n-2);	
            }
            
            return cache[n-1] + cache[n-2];
        }
            
        return innerFib(n);
    }
}
