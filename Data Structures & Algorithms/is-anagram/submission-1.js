class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        	if(s.length !== t.length){
                return false;
            }
            
            const hashOne = {};
            const hashTwo = {};
            for(let i = 0 ; i < s.length ; i++){
                if(hashOne[s[i]]){
                    hashOne[s[i]]++;
                } else {
                    hashOne[s[i]] = 1;
                }
                if(hashTwo[t[i]]){
                    hashTwo[t[i]]++;
                } else {
                    hashTwo[t[i]] = 1;
                }
            }
            
            let result = true;
            
                Object.keys(hashOne).forEach(key => {
                if(hashOne[key] !== hashTwo[key]){
                    result = false;
                }
            });
            return result;
    }
}
