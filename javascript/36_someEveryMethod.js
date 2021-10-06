/* EVERY METHOD : # Tests whether ALL elements in the array pass the provided function.
                  # It returns a boolean value
                  # It also accepts function as argument
                  # if single value is false then total value is false
---------------------------------------------------------------------------------------------------*/ 

const attedence = [75,86,98,90,94,92,93,96,97,99,100];

const check1 = attedence.every(a => a >= 75);
const check2 = attedence.every(a => a >= 80);

console.log(check1); // true --> coz all have attendence >= 75
console.log(check2); // false --> coz all don't have attendence >= 80


/* --------------------------------------------------------------------------------------------------
SOME METHOD : # similar to every but returns true if ANY of the array elements pass the test function
----------------------------------------------------------------------------------------------------*/

const check3 = attedence.some(student => student === 100);
const check4 = attedence.some(student => student >= 98);
const check5 = attedence.some(student => student < 75);

console.log(check3); // true
console.log(check4); // true
console.log(check5); // false












