function descending(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        let j = i - 1;
        while (j >= 0 && array[j] < current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array
}

const inputArray = [6,4,7,1,2,1,4,3,3,0,4]
console.log("Input array is ", inputArray);
console.log("output is " , descending(inputArray));