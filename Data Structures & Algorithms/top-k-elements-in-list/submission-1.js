class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        	const res = [];
	const bucket = nums.reduce((res) => {
  	res.push([]);
    return res;
  }, [[]]);
  
  const fMap = {};
  
  nums.forEach((number) => {
  	if(fMap[number]){
    	fMap[number] += 1;
    } else {
	    fMap[number] = 1;
    }  
  });
  
  // number -> freq
  Object.keys(fMap).forEach((number) => {
  	bucket[fMap[number]].push(Number(number));
  })
  
  console.log(fMap);
  console.log(bucket);
  let count = k;
  
  for(let i = bucket.length - 1 ; i >= 0 ; i--){
    if(count === 0){
    	break;
    }
    
    if(bucket[i].length){
    	console.log("b[i]", bucket[i]);
      for(let y = 0 ; count >=0 && bucket[i].length ; y++){
      	console.log("count: ", count);   
        console.log("bucket[i].length: ", bucket[i].length);
        res.push(bucket[i].pop());
        count--;
        console.log("res: ", res);
      }
      console.log('->', i);
      
    }
    console.log(i);
  }
  
  
  return res;
    }
}
