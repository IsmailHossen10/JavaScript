//  2!=1*2
//  3!=1*2*3
//  4!=3!*4
//  5!=(5-1)!*5
function fac(number){
    if (number ==0){
        return 1;
    }
    else {
        return  fac(number-1) *number;
    }
}
let result = fac(10)
console.log(result)