
//============================================================= Ascending order sorting ================================================================

function ascending(params){
    for(let i=0 ; i<params.length-1 ; i++){
        for(let j=i+1 ; j<params.length ; j++){
            if(params[i] > params[j]){
                let temp = params[i];
                params[i] = params[j];
                params[j] = temp;
            }
        }
    }
    return params
}

//============================================================= Descending order sorting ================================================================

function descending(params){
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

const inputArray = [5, 8, 2, 9, 5, 3];
console.log("input array is ",inputArray);
console.log("Ascending order is " , ascending(inputArray));
console.log("Descending order is " , descending(inputArray));