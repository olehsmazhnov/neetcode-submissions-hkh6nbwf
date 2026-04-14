class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};
  
        strs.forEach((str) => {
            const arr = str.split("").sort().join("");
            if(hashMap[arr]) {
            hashMap[arr].push(str)
            } else {
            hashMap[arr] = [str];
            }
        })
        return Object.values(hashMap);        
    }
}
