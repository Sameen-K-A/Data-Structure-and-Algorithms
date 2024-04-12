function quick_sort(parms){
    if(parms.length <= 1){
        return parms
    }
    const select = parms[0];
    const left = [];
    const right = [];
    for(let i=1 ; i<parms.length ; i++){
        if(select > parms[i]){
            left.push(parms[i]);
        } else{
            right.push(parms[i])
        }
    }
    return [...quick_sort(left) , select , ...quick_sort(right)];
}

const array = [5,4,7,2,4,1,9,8,5,0,2,2,1,4,15];
console.log("Original array:", array);
console.log("Sorted array:", quick_sort(array));