'use strict';

function judge(obj,arr){
  if (arr.indexOf(obj) >= 0 )
  return true;
  else
  return false;
}

function calculate(collectionA,objectB){
  for(let i =0 ; i<collectionA.length ; i++){
    if (judge(collectionA[i].key,objectB.value))
    collectionA[i].count = reduce_one(collectionA[i].count);
  }
  return collectionA
}
function reduce_one(num){
  let b = parseInt(num/3);
  return num-b
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return calculate(collectionA,objectB);
}
