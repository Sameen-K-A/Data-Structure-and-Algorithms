function Ascending(params){
    for(let i=0 ; i<params.length-1 ; i++){
        for(let j=i+1 ; j<params.length ; j++){
            if(params[i] < params[j]){
                let temp = params[i];
                params[i] = params[j];
                params[j] = temp;
            }
        }
    }
    return params
}

let array = [5, 2, 4, 6, 1, 3];
console.log("Original array:", array);
console.log("Sorted array:", Ascending(array));