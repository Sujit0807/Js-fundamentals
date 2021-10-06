/* ---------------------------------------------------------------------------------------------------------------
Prototypes : # Prototypes are the mechanism by which JavaScript objects inherit features from one another
             # Prototypes are the template object which contains different types of methods
             # every method that we use in array like .includes(), push(), pop() these are defined under the proto object
               not in array
             # we can define our own prototype methods/properties ---> adding this will present in every Prototype
                                                                       but will not work for other dataType
             # Prototypes where that data types methods/properties are store 
             # we can OVERWRITE predefined methods as well   --> but this is not recommended
-----------------------------------------------------------------------------------------------------------------*/
// adding to String prototypes our own method/property
const val = 'Sam';
String.prototype.myFunc = () => alert('HELLO!!');
val.myFunc();  // op alert msg

// this in string 
String.prototype.yell = function () {
    console.log(this.toUpperCase());   // this refers to val(i.e 'Sam')  --> op is SAM
}
val.yell();  


//---------------------------------------------------------------------------------------------------------------

// we can do same with arrays as well
const arr = [1,2,3];
Array.prototype.Hello = () => 'hello';
console.log(arr.Hello());
// console.log(val.Hello());          // will not work for string datatype coz it is defined for arrays


arr.myArr = () => {console.log('HELLO ARRAY!')};
console.log(arr);   // you can see under array myArr() func is present


// overwrite predefined methods  --> doing this will reflect all over array
Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
}
console.log(arr.pop());
console.log(arr);
console.log([1,2,3,4,5,6].pop());

console.log(Array.prototype);


/*---------------------------------------------------------------------------------------------------------------
What is difference between : _PROTO_ vs PROTOTYPE
--> They both are very similar, they sound like same.
    PROTOTYPE is actual object where we add methods/properties(i.e template object prototype)
    _PROTO_ is a reference to actual prototype object & is property name on that data type like array/string
----------------------------------------------------------------------------------------------------------------*/

