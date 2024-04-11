
//=========================================================== normal case =================================================================

function febonacci(n){
    let array = [0,1];
    for(let i=2 ; i<n ; i++){
        array.push(array[i-1] + array[i-2])
    }
    return array;
}
console.log(febonacci(10));

//======================================================= Recursion method ===============================================================

function recursionFebonacci(n){
    let array = [0,1];
    if(n===0 || n==1){
        return array
    } else{
        let series = recursionFebonacci(n-1);
        series.push(series[series.length-1] + series[series.length-2]);
        return series
    }
}
console.log(recursionFebonacci(10));