// ===========================================================================================================================================

// finding the target , which index sum is return our target

// step 1
// function targetFinder(array , target){
//     for(let i=0 ; i<array.length-1 ; i++){
//         for(let j=i+1 ; j<array.length ; j++){
//             if(array[i] + array[j] === target){
//                 const result = [];
//                 result[0] = array[i];
//                 result[1] = array[j];
//                 return result
//             }
//         }
//     }
// }
// const checkarray = [1,4,5,6,8,7,1,0,2,12,45,7,1,6];
// console.log(targetFinder(checkarray , 11));

// ===========================================================================================================================================

// step 2
// function targetFinder2 (array , target){
//     const result =[]
//     const dataSet = new Set();
//     for(let i=0 ; i<array.length ; i++){
//         dataSet.add(array[i])
//         const element = array[i];
//         const matched = target-element;
//         if(dataSet.has(matched)){
//             result.push(matched , element);
//             return result
//         }
//     }
// }

// const checkarray = [1,4,6,8,7,1,0,2,12,45,7,1,6];
// console.log(targetFinder2(checkarray , 10));

// ===========================================================================================================================================

// move specific elements to end of the array

// function moveArray (array , element){      //O(1)
//     for(let i=0 ; i<array.length ; i++){   //O(n)
//         if(array[i] === element){          //O(1)
//             array.push(array[i])           //O(1)
//         array.splice(i , 1);           //O(1)
//     }
// }
// return array;                          //O(1)
// }

// console.log(moveArray([1,3,4,5,2,7,8,4,9,2,5,4,2,1,2] , 2));

/// in this code time consuming is T(n)
// and space consuming is s(1)

// ===========================================================================================================================================