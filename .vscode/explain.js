function explain(name,age,task){
    task();
    console.log("My name is ",name);
    console.log("And my age ",age,"years old");
   
}
function handclean(){
    console.log("I wash my hands before eating");
}
function shower(){
    console.log("I shower every day");
}
explain("Ismail Hossen ",21,handclean);
explain(" Yamin",25,shower);