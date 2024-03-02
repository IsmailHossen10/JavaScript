let fac =1;
for (let i =1; i<=10;i++){
    fac =fac*i;
    console.log(fac);
 }

// Another way to solve the factorial......
function factorial(n){
    let factorial =1;
    for(let i =1; i <=n; i++){
        factorial =factorial*i;
    }
    return factorial;
}
let result =factorial(10)
console.log(result)