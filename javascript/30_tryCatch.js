/* Try/Catch Statement : # they usually used to catch the errors from stoping the execution of code
                         # it helps us from stoping the code execution
-----------------------------------------------------------------------------------------------------*/

try{
    console.log(hello.toUpperCase());  // write that statement in try block which will cause problem
}catch{
    console.log("ERROR!!");
}
console.log('After');



function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }
    catch(e){
        console.log(e);  // to see what was an error
        console.log('Please pass a string next time');
    }
}
yell('Hello ');
yell();