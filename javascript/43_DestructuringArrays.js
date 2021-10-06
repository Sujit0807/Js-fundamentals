/* Destructuring arrays : # A short clean syntax to unpack :
                                1.Values from arrays
                                2.Properties from objects
                          # Properties from objects into distinct variables
                          # we are just copying that values into variables
                          $ rest elements sholud always last element
---------------------------------------------------------------------------------------------------------*/

const marks = [90,98,92,96,89,85,86];


// without destructuring arrays :

const rahul = marks[0];
const colt = marks[1];
const sam = marks[2]; // so on..


// with help of destructuring arrays :

const [anjali,vaishnavi,hermione,...everyoneElse] = marks;

console.log('Rahul:',rahul);
console.log('Colt:',colt);
console.log('Sam:',sam);
console.log('hermione:',hermione);
console.log('EveryoneElse:',everyoneElse); // array of remaining one


