/* Spread in function calls : $ it is used like three dots ...
                              $ it is actually separating out each element from array/string into separate argument
                              $ it is not the destructive one
--------------------------------------------------------------------------------------------------------------------*/
const numbers = [1,2,3,4,5,6,7,8,9,-1,-2];

let max = Math.max(-4,1,2,3);

console.log(max); 
console.log(Math.max(numbers)); // NaN


// when we use spread : it spread out the array elements
console.log(...numbers); // 1 2 3 4 5 6 7 8 9 -1 -2
console.log(Math.max(...numbers)); // 9
console.log(Math.min(...numbers)); // -2

console.log(...'Hello') // H e l l o


/* ------------------------------------------------------------------------------------------------------------------
spread With array : # it just copies the elements
--------------------------------------------------------------------------------------------------------------------*/

const cats = ['Blue','Scout','Rocket'];
const dogs = ['Rusty','Wyatt']


// now i want to merge this into new allPets array

let allPets = [1,2,3,...cats, ...dogs, 'speedy']; 
console.log(allPets);  // ['Blue','Scout','Rocket','Rusty','Wyatt']

let str = [...'HELLO'];
console.log(str); // ['H','E','L','L','O']


/* ------------------------------------------------------------------------------------------------------------------
spread With Objects : $ if there is same property then it is going to replace value of first with value of other which at 
                      $ in objects we cannot have same propery two or more times
--------------------------------------------------------------------------------------------------------------------*/

const feline = {legs : 4, family : 'felidae'};
const canine= {isFurry : true, family : 'caninae'};

const pet = {...feline, color : 'Black' , ...canine};
// $ if there is same property then it is going to replace value of first with value of other which at last
// here family = 'caninae coz it comes after feline
console.log(pet);

// what if we spread array into objects ?
const myObj = {...[2,4,6,8]};
console.log(myObj); // {0:2, 1:4, 2:6, 3:8 }

console.log({...'Hello'}); // {0:'H', 1:'e', 2:'l', 3:'l', 4:'o' }
console.clear();

//----------------------------------------------------------------------------------------------------------------------

const dataFromForm = {
    email : 'blueman@gmail.com',
    password : 'tobias123',
    username : 'tfunke'
};

const newUser = {...dataFromForm , id:2468, isAdmin: false};
console.log(newUser);








