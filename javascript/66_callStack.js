/*---------------------------------------------------------------------------------------------------------------------------
The call stack : # The mechanism the JS interpreter uses to keep track of its place in a Script that calls multiple functions
                   e.g we point finger to keep track reading line while reading book
                 # How JS 'knows' what function is being currently being run and what functions are called from within that
                   function.

                 # HOW IT WORKS : 1.When script calls a function, the interpreter adds it to the call stack and then starts
                                    carrying out the function.
                                  2.Any function that are called by that function are added to the call stack further up,
                                    and run where their calls are reached.
                                  3.When the current function is finished, the interpreter takes it off the stack and resumes 
                                    execution where it left off it in the last code listing.

YOU CAN CHECK THE CALL STACK HOW WORKS IN CHROME ---> Start with adding breakPoint then run one by one                                  
---------------------------------------------------------------------------------------------------------------------------*/
// e.g
const multiply = (x,y) => (x*y);

const square = (x) => multiply(x,x);

const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c);
};

console.log('Before!!');

console.log(isRightTriangle(3,4,5));

console.log('Done!!');



















