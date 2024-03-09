// function mergeArrays(arr1: [], arr2: []) {
//     let arr3 = arr1.concat(arr2)
//     let sortedArr3 = arr3.sort((a, b)=>{return a - b});
//     return [...new Set(sortedArr3)];
//   }

const mergeArrays = (arr1: [], arr2: []) => [... new Set(arr1.concat(arr2).sort((a, b)=>{return a - b}))];