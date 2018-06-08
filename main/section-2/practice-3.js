'use strict';
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
    result2.push({name:i,summary:0})
  }
  return result2
}
function add_count(collection){
  let result = find_char(collection);
  for(let a of collection){
    for (let b of result){
      if (a == b.name){
        b.summary++    //对象的count++
      }
    }
  }
  return result}

function _split(arr) {
for(let i = 0 ; i<arr.length;i++){
  if (arr[i].length == 3){
    let b = arr[i].split("");
    arr[i] = b[0];
    for(let j = 0 ; j < b[2]-1 ; j++){
      arr.push(b[0])
    }
  }
  //t[10]
  else if(arr[i].length > 3 ){
    let b = arr[i].split("[");
    arr.splice(i,1);
    for(let j = 0 ; j < parseInt(b[1]) ; j++){
      arr.push(b[0])
  }
}
}
return arr
} 

module.exports = function countSameElements(collection) {
  return add_count( _split(collection));
}
