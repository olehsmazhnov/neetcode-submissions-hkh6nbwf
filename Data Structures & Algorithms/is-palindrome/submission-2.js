class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            const notChar = ['?', '!', ' ', '.', ',', '^', '&', '@', '`', '\'', ':', ';'];
	let l = 0;
  let r = s.length - 1;
  
  let temp = 0;
  let isSuccess = true;
  while(l <= r){
  	temp++;
    const lChar = s[l];
    const rChar = s[r];
    let isSkip = false;
    
    if(notChar.includes(lChar)) {
    	l++;
      isSkip = true;
    }
    if(notChar.includes(rChar)) {
    	r--;
      isSkip = true;
    }
    
    if(!isSkip){
    	console.log(lChar.toLowerCase(), rChar.toLowerCase());
      if(lChar.toLowerCase() !== rChar.toLowerCase()){
				isSuccess = false;      
      }
      l++;
      r--;
    }
    
   
    if(temp === 100){
	    return;
    }
  }
	return isSuccess;
    }
}
