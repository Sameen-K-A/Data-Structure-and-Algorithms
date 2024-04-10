function recursionBinarySearch(array , target){
    return console.log(result(array , target , 0 , array.length-1));
}
function result(array , target , starting , ending){
    if(starting > ending){
        return -1
    }
    let midIndex = Math.floor((starting+ending)/2);
    if(target === array[midIndex]){
        return midIndex;
    }
    if(target < array[midIndex]){
        return result(array , target , starting , midIndex-1)
    } else{
        return result(array , target , midIndex+1 , array.length-1)
    }
}
recursionBinarySearch([1,2,3,4,5,6,7,8,9,10] , 10)