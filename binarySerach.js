const binarySearch = (array , target)=>{
    let firstPostition = 0;
    let lastPosition = array.length-1;
    while(firstPostition <= lastPosition){
        let midPosition = Math.floor((firstPostition + lastPosition) / 2);
        if(target === array[midPosition]){
            return `${target} find at position ${midPosition}`
        }
        if(target < array[midPosition]){
            lastPosition = midPosition - 1;
        } else{
            firstPostition = midPosition + 1
        }
    }
    return -1
}

console.log(binarySearch([1,3,5,7,10,15,20] , 10));