/*  Comparison operators :  1. >  (greater than)        
                            2. <  (Less than)
                            3. >= (greater than or equal to)
                            4. <= (less than or equal to)
                            5. == (Equality)
                            6. != (Not equal)
                            7. === (Strict equality)
                            7. !== (Strict non-equality)

---------------------------------------------------------------------------*/
let age = 20;
console.log(age>=18); // true

console.log(1>3);   // false
console.log(1<3);   // true
console.log(-1<3);  // true
console.log(-1>-3); // true
console.log(-1<-1); // false    // Note that these all returns boolean value
console.log(-1>-1); //  false
console.log(12==12) // true
console.log(1>=3);  // false
console.log(1<=3);  // true
console.log(-1<=3); // true

console.log('a' > 'b'); // false   // because of unicode value
console.log('a' > 'A'); // true
console.log('A' > 'a'); // false
console.clear();

/* ----------------------------------------------------------------------------
Difference between double equal (==) and triple equal(===)
-----------------------------------------------------------------------------*/
/*1.Double equal : # it compare equality of values but not type(data type)
                   # this may lead unexpected results*/

console.log(1==1);   // true
console.log(1=='1'); // true

console.log(1 !='1'); // false

console.log('2'=='1'); // false
console.log("a"=="b"); // false
console.log(0==false); // true

console.log(0==''); // true
console.log(null==undefined); // true


/* 2.triple equal : # checks equality of value and type(data type)*/

console.log(1===1);       // true
console.log(1==="1");     // false
console.log('2'==='1');   // false
console.log(0===false);   // false
console.log(0==="");      // false
console.log(null===undefined); // false

console.log(1!=="1"); // true
console.log(1!=="2"); // true










