// find the factorial of a number 

// normal method

function factorial(number){
    let result = 1;
    for(let i=1 ; i<=number ; i++){
        result = result * i
    }
    return result
}

console.log(factorial(10));


// recursion method

function recursionMethod(number){
    if(number <= 1){
        return 1
    }
    recursionMethod(number-1)
    console.log(number);
    recursionMethod(number-1)
}
console.log(recursionMethod(10));