let fibo=[0,1];
for(let i=2;i<=10;i++){
    fibo[i] =fibo[i-1]+fibo[i-2]
}
console.log(fibo)


//ফাংশন ব্যবহার করে ফিবোনাক্কি সংখ্যা 
function fibonacci(n){
    let fibonacci=[0,1];
    for(let i=2;i<=n;i++){
    fibonacci[i] =fibonacci[i-1]+fibonacci[i-2]
    }
    return fibonacci;

}
let result =fibonacci(14);
console.log(result)