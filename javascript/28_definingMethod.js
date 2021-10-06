/* Methods : # Every Method is function but every function is not Method 
             $ we can add functions as properties of an Object --> we call them METHODS!
-----------------------------------------------------------------------------------------*/
 
// Defining myMath object with creating methods :
const myMath = {
    PI : 3.14159,
    square : function(num){
        return num * num;
    },
    cube : function(num){
        return num**3;
    }
}
console.log(myMath.PI);       // 3.14159
console.log(myMath['PI']);    // 3.14159
console.log(myMath.square);   // return func defination
console.log(myMath.square()); // NaN
console.log(myMath.square(6));
console.log(myMath.cube(2));

console.log(myMath['PI']); // 3.1459
console.log(myMath['square'](3)); // 9
console.log(myMath['cube'](3));   // 27



// SHORTHAND for Above code:

const myFunc = {
    PI : 3.14159,
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}
console.log(myFunc);

console.log(myFunc.PI);       // 3.14159
console.log(myFunc['PI']);    // 3.14159
console.log(myFunc.square);   // return func defination
console.log(myFunc.square()); // NaN
console.log(myFunc.square(6));
console.log(myFunc.cube(2));

console.log(myFunc['PI']); // 3.1459
console.log(myFunc['square'](3)); // 9
console.log(myFunc['cube'](3));   // 27