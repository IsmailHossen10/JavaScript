let namee =[3,6,3,5,7,8,6,12, 23,];
let uniqueName = [];
for (let i =0 ; i <namee.length ; i++){
    let element = namee[i];
    let index = uniqueName.indexOf(element);
    if(index  == -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName)