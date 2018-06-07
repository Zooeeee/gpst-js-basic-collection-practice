'use strict';
function judge(input,char){
  if (input === char)
    return true
  else 
    return false
}
function key_to_arr(collectionA){
    let result = new Array;
    for (let a of collectionA){
      result.push(a.key)
    }
    return result 
}

module.exports = function collectSameElements(collectionA, objectB) {
  collectionA = key_to_arr(collectionA)
  let result = new Array 
  for(let a of collectionA){
  for(let b of objectB.value){
    if (judge(a,b))
    result.push(a)
}
}   
return result;
}
