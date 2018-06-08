'use strict';
function find_char(arr){   //找出数组中独特的字符
  let result1 = new Array ;
  let result2 = new Array;
  //result.push({name:arr[0],summary:0});
  for(let a of arr){
   if (result1.indexOf(a) == -1)
   result1.push(a)
  }
  for(let i of result1){
    result2.push({key:i,count:0})
  }
  return result2
}
function add_count(collection){
  let result = find_char(collection);
  for(let a of collection){
    for (let b of result){
      if (a == b.key){
        b.count++    //对象的count++
      }
    }
  }
  return result}
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
  return calculate(add_count(collectionA),objectB);
}
