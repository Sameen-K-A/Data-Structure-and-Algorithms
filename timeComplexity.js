function sum1 (n){
    let sum =0;
    for(let i=0 ; i<n ; i++){
        sum += i
    };
    console.log("Sum1" , sum);
};


function sum2(n){
    let sum = n*(n-1)/2;
    console.log("sum2" , sum);
}


sum2(100000000)
sum1(100000000);  