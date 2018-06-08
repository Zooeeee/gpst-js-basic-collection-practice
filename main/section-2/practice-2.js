'use strict';
function find_char(arr){   //找出数组中独特的字符
  let result = new Array ;
  result.push({key:arr[0],count:0});
  let b = arr[0];
  for (let a of arr){
    if(a !== b)
      {b = a ;
      result.push({key:a,count:0});
  }}
  return result 
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

function _split(arr) {
for(let i = 0 ; i<arr.length;i++){
  if (arr[i].length == 3){
    let b = arr[i].split("");
    arr.splice(i,1);
    for(let j = 0 ; j < b[2] ; j++){
      arr.push(b[0])
    }
  }
}
return arr
} 


module.exports = function countSameElements(collection) {
  return add_count(_split(collection));
}
