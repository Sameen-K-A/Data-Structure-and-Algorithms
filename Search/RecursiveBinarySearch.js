function BinarySearch(array , target){
    return result(array , target , 0 , array.length - 1)
}
function result(array , target , staring , ending){
    if(staring > ending){
        return -1;
    }
    let midIndex = Math.floor((staring+ending)/2);
    if(target === array[midIndex]){
        return midIndex;
    }
    if(target < array[midIndex]){
        return result(array , target , 0 , midIndex-1)
    } else{
        return result(array , target , midIndex+1 , array.length-1);
    }
}

console.log(BinarySearch([1,3,5,6,7,9] , 10)); 