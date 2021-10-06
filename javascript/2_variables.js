/* Variable: Which Stores Data

There are 3 ways to declare variables : 1.var --> now not use
                                        2.let
                                        3.const 

Naming Convention: 1.cannot use number first
                   2.no Space Allowed
                   3.can start with _(underscore) and $(dollar)
                   4.we can use number inbetween and at last
                   5.use camelCase(Recommended) or PascalCase
                   6.Give meaningful names
-------------------------------------------------------------
1.Let
-------------------------------------------------------------*/                                    
let number1 = 12;
console.log(number1); // 12

let number2 = 68;
console.log(number2); // 68

console.log(number1+number2); // 80

let num = 0;
num += 5;

// console.clear();  --> To clear console

/* -------------------------------------------------------------
2.const : # const value cannot be updated
          # const value need to initialize at time of declaration
          # so const used for constant values like pi, daysInWeek*/

const val = 10;
console.log(val);

val += 1;  // ERROR
console.log(val);

const myNum;
myNum = 12; // ERROR
console.log(myNum);

/* --------------------------------------------------------------
3. var : # var is now old keyword to declare variable 
         # Now we use let and const to declare variable
         # var still works */

var a = 10;
console.log(a);



























