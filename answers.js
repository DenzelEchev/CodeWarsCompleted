//Answer to #1
/*
1st attempt
function multiply(a,b){
    return a*b
}

Refractor
var multiply = (a, b) => a*b 
*/
//----------------
/*
Answer to #2
function solution(str, ending){
  if(str.slice(str.length = -ending.length) === ending || ending === "") {
    return true
  }else{
    return false
  };
}
 */

/**
 * Answer to #3
 * 
 * function mergeArrays(arr1, arr2){
  let arr3 = arr1.concat(arr2)
  let sortedArr3 = arr3.sort(function(a, b){return a - b});
  return [...new Set(sortedArr3)];
}
 */

/**
 * Answer to #4
 * 
 * 1st attempt
 * function sentencify(words) {
  let sentence = words.join(' ')
  const sentence2 = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
  return sentence2
}

Refractor
function sentencify(words) {
  let sentence = words.join(' ')
  return sentence2 = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
}
 */

/**
 * Answer to #5
 * 
 * Array.prototype.remove_ = function(integer_list, values_list){
    var result=[];
    for(let index=0; index< integer_list.length; index++){
            if(values_list.includes(integer_list[index])==false){
               result.push(integer_list[index]);
               }
      }
      return result;
}
 */

/**
 * Answer to #6
 *
 *  var countSheep = function (num){
  var sheepCounter = []
  for (let index = 1; index <= num; index++){
  sheepCounter.push(`${index} sheep...`)
  }
  return sheepCounter.join('')
}
 */

/**
 * Answer to #7
 * 
 * let getAge = inputString => parseInt(inputString)
 */

/**
 * Answer to #8
 * 
 * let stringToArray = s => s.split(' ')
 */

/**
 * Answer to #9
 * 
 * const oddCount = n => Math.floor(n/2)
 */

/**
 * Answer to #10
 * 
 * function solve(s){
  let capsArr = []
  let lowerArr = []
  let numsArr = []
  let symbolArr = []
  let result = []
 for (let i = 0; i < s.length; i++){
  if(s.charAt(i) !== s.charAt(i).toLowerCase()){
    capsArr.push(s.charAt(i))
  }else if(s.charAt(i) !== s.charAt(i).toUpperCase()){
    lowerArr.push(s.charAt(i))
  }else if(s.charAt(i) == parseInt(s.charAt(i))){
    numsArr.push(s.charAt(i))
  }else{
    symbolArr.push(s.charAt(i))
  }
 }
  return result = [capsArr.length, lowerArr.length, numsArr.length, symbolArr.length]
}
 */

/**
 * Answer to #11
 * 
 * function isOddHeavy(n){
  var oddArr = []
  var evenArr = []
  //splitting the array into two different function
  n.map(x => {
    if(x%2 == 0){
      evenArr.push(x)
      evenArr.sort(function(a, b) {
  return a - b;
});
    }else if((x%2 !== 0)){
      oddArr.push(x)
      oddArr.sort(function(a, b) {
  return a - b;
});
}else{
  
}
  })
//comparing the two arrays 
  if(oddArr[0]<=evenArr[evenArr.length-1] || oddArr == 0){
    return false
  }else{
    return true
  }
}
 */