/* Functions : # This is vvv.imp in javascript
               # Functions allows us to write reusable, modular code
               # Reduces duplication in a code
               # first define funtion and then call it
               $ If we call function first then defination it is still okk, but not recommmended. u'll get the op

Types of Functions :
1.Normal
2.parameterised
3.Default

-----------------------------------------------------------------------------------------------------------------*/
// 1.Normal Function:

// first defination then calling
function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong(); 
singSong('Hello'); // No Error Why ?


// calling function first then defining it - not recommended but still works
myFunc();

function myFunc(){
    console.log("Hello Everyone!");
}


/* ------------------------------------------------------------------------------------------------------------------
2. parameterised functions : # function which takes parameters
                             # when functions defines varible in it --> parameter
                               when calling function passing value  --> arguments(inputs to functions)
                             # method is also function
                             # parameters has function scope i.e we can't access it outside of function 
*/

// Single Parameter :
function greet(firstName){
    console.log(`FirstName is : ${firstName}`);
}

greet();         // FirstName is : undefined
greet('Sujit');  // FirstName is : Sujit
greet(14312);    // FirstName is : 14312


// Multiple parameters : Here Ordere matters
function myName(firsName,lastName){
    console.log(`My Name is : ${firsName} ${lastName[0]}`);
}
myName('Colt','Steele');
myName('Colt','Steele','sam'); // no error
// myName('Colt'); //error


let greeting = '';
function repeat(str, numTimes){
    for(let i = 0; i < numTimes; i++){
        greeting += str;
    }
    console.log(greeting);
}

repeat('HI ', 2);
repeat('HI ', '3'); // stillgetting an op
console.clear();


function isSnakeEyes(num1,num2){
    if(num1==num2==1){                   // here we can't use === (strict equality)
        console.log('Snake Eyes!');
    }else
        console.log('Not Snake Eyes!');
}

isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5);


// 3.default function : 
function fullName(firsName,lastName =' Steele'){
    console.log(`My Name is : ${firsName} ${lastName}`);
}
fullName('sam');
fullName('sam','Jadhav');


/* ---------------------------------------------------------------------------------------------
Function Returning Values : # The return function ends the function execution AND specifies value
                              to be returned by that function.
                            # we can return only ONE VALUE
                            # Built in methods returns values we can store them in variable
                            # we also returns value from functions and store in varible
*/

function add(x,y){
    return(x + y);
    console.log("I will not execute"); // coz above we return from function
}
let sum = add(10,20);

console.log(sum);
console.log(add(300,90));
console.log(add(add(300,90),10));


function lastElement(array){
    let length = array.length - 1;
    console.log(length);
    return (array[length]);
}
lastElement([3,5,7]);
console.log(lastElement([1]));
console.log(lastElement([])); // undefined
