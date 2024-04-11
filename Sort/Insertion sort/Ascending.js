function selectionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current
    }
    return array
}

const inputArray = [5, 8, 2, 9, 5, 3];
console.log("input array is ",inputArray);
console.log("Result is " , selectionSort(inputArray));