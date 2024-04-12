function selection_sort(array){
    for(let i=0 ; i<array.length-1 ; i++){
        let smallValue_index = i;
        for(j=i+1 ; j<array.length ; j++){
            if(array[j] < array[smallValue_index]){
                smallValue_index = j;
            }
        }
        if(smallValue_index != i){
            let temp = array[i];
            array[i] = array[smallValue_index];
            array[smallValue_index] = temp;
        }
    }
    return array
}

const inputArray = [5,9,1,7,5,3,6,1,0,7];
console.log("Input array is " , inputArray);
console.log("output is " , selection_sort(inputArray));