let speech = "I am a student .  I read in class in diploma. I love my mother";
let count = 0;
for(let i = 0 ;i<speech.length;i++){
    let char = speech[i];
    if( char == " "&& speech[i-1]!=" "){
        count++;
    }
}
console.log(count);