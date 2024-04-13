const arr = [4, 5, 2, 6, 7, 3, 6, 8, 4, 2, 4, 6, 8, 3, 5, 4]
function merge(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const leftArray = merge(array.slice(0, mid));
    const rightArray = merge(array.slice(mid));
    return mergeArray(leftArray, rightArray);
}
function mergeArray(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(right.shift())
        } else {
            result.push(left.shift())
        }
    }
    return [... result , ...left , ...right]
}
console.log(arr);
console.log("After sorting ", merge(arr));