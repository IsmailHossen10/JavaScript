function factorial (num){
    let i =1;
    factorial =1;
    while (i<=num){
        factorial =factorial*i;
        i++
    }
    return factorial;
}
let result =factorial(5);
console.log(result)