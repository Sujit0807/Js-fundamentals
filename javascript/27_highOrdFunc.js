/* Higher Order Functions : # Function that operates on/with other functions.
                            # They Can : 1.Accepts Other function as arguments
                                         2.Return a function
-----------------------------------------------------------------------------------------------*/


// 1. Function as argument :
function callTwice(func) {   // Another function as argument
    func();
    func();
}

function callTenTimes(f) {
    for(let i = 0; i<10; i++){
        f();
    }
}
function rollDie(){
    const roll = Math.floor(Math.random() * 6 ) + 1;
    console.log(roll);
}

callTwice(rollDie);  // vv.imp--> HERE we have to pass FUNCTION NAME  WITHOUT PARENTHESIS
callTenTimes(rollDie);  // vv.imp--> HERE we have to pass FUNCTION NAME  WITHOUT PARENTHESIS
console.clear();


/*----------------------------------------------------------------------------------------------
 2. function returns function :
 ----------------------------------------------------------------------------------------------*/
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("CONGRATS, I AM A GOOD FUCNTION!");
            console.log("YOU WIN A MILLION DOLLAR!!");
        }
    }else{
        return function(){
            alert("YOU HAVE BEEN INFECTED BY COMPUTER VIRUS");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");                     
        }
    }
}
console.log(makeMysteryFunc());

const mystery = makeMysteryFunc();
console.log(mystery);    // return function defination
// console.log(mystery());  // gives function op

console.clear();


/*-----------------------------------------------------------------------------------------------
Factory Function : which creates function for me
-----------------------------------------------------------------------------------------------*/

function makeBetweenFunc(min,max){
    return function(num){
        return num >= min && num <=max;
    }
} 
const isChild = makeBetweenFunc(1,18);
console.log(makeBetweenFunc(1,18));  // returns function defination
console.log(isChild);     // returns function defination
console.log(isChild());   // false
console.log(isChild(12)); // true
console.log(isChild(20)); // false

const isAdult = makeBetweenFunc(19,100);
console.log(isAdult(30)); // true
console.log(isAdult(18)); // false













