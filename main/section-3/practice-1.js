'use strict';

function judge(obj,arr){
  if (arr.indexOf(obj) >= 0 )
  return true;
  else
  return false;
}

function reduce_one(collectionA,objectB){
  for(let i =0 ; i<collectionA.length ; i++){
    if (judge(collectionA[i].key,objectB.value))
    collectionA[i].count -= 1;
  }
  return collectionA
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
 return reduce_one(collectionA,objectB)
}
