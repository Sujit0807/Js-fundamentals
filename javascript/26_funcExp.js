/* Function Expression : # It is Another way to define function 
                         $ functions are treated like values
--------------------------------------------------------------------*/

// function add(x,y){
//     return x + y;
// }


const add = function (x,y){
    return x + y;
}
add(); //  calling to  function
console.log(add); // function defination as op
console.log(add()); // NaN
console.log(add(3,5)); // NaN