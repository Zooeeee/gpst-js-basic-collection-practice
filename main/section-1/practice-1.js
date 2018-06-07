'use strict';

function judge(input,char){
    if (input === char)
      return true
    else 
      return false
}

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = new Array 
  for(let a of collectionA){
  for(let b of collectionB){
    if (judge(a,b))
    result.push(a)
}
}   

  
  
  
  return result;
}
