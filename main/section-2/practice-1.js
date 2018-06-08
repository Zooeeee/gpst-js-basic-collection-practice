 'use strict';
function find_char(arr){   //找出数组中独特的字符
  let result = new Array ;
  result.push({key:arr[0],count:0});
  let b = arr[0];
  for (let a of arr){
    if(a !== b)
      {b = a ;
      result.push({key:a,count:0});//加一个对象
  }}
  return result   //返回数组  单位是对象

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

module.exports = function countSameElements(collection) {
  return add_count(collection)
}
