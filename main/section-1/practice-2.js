'use strict';
function judge(input,char){
  if (input === char)
    return true
  else 
    return false
}
function judge_two_arr(collectionA,collectionB){
  let result = new Array 
  for(let a of collectionA){
  for(let b of collectionB){
    if (judge(a,b))
    result.push(a)
}
}   
return result;}
module.exports = function collectSameElements(collectionA, collectionB) {
  let result = Array;
  for(let a of collectionB){
  result= judge_two_arr(collectionA,a)
}
return result;
}
