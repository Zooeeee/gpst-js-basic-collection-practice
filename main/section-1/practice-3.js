'use strict';
function judge(input,char){
  if (input === char)
    return true
  else 
    return false
}

module.exports = function collectSameElements(collectionA, objectB) {
  let result = new Array 
  for(let a of collectionA){
  for(let b of objectB.value){
    if (judge(a,b))
    result.push(a)
}
}   
return result;
}
