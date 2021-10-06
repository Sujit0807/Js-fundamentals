/* Reference Data Types : # Array
                          # Object
                          # Dates

Arrays :    # This is reference data type
            # Ordered Collection of data (may same or different)
            # Array indexes starts from 0 and end with length-1
            # typeof array is "Object"
            # const is commonly used but let also be used
            # for e.g comments on instagram , levels in mario game 
------------------------------------------------------------------------------------------------------ */

// To make an empty array
let array = []
// An array of strings
let strings = ["sam",'john','colt','Brad'];
// An array of numbers
let numbers = [1,2,3,4,5,6];
// Mix array
let stuffs = ["sam",1,12.5,null,undefined,true,false,new Date(),{a:1,b:2},[10,12],NaN];
console.log(typeof stuffs); // object

/* -------------------------------Random Access------------------------------------------------------ */

console.log(array[0]);    // undefined
console.log(strings[2]);  // colt
console.log(strings[2][0]);  // c
console.log(numbers[5]);  // 6
console.log(stuffs[7]);   // date
console.log(stuffs[8]);   // {a:1,b:2}
console.log(stuffs[100]); // undefined


array[0] = "Sam";
array[6] = "Rahul";
array[7] = "Akash";
console.log(array.length); // 8
console.log(array); // ["Sam",empty x 5,"Rahul","Akash"]
console.log(array[0]); // Sam
console.log(array[1]); // undefined
console.clear();

/* -------------------------------Array Operations----------------------------------------------------
push : Add to the end     --> returns index
pop  : Remove from end    --> returns value   
shift : Remove from start --> returns value
unshift : Add to start    --> returns index

concat : Merge arrays                  --> does not changes original array
includes : Look for a value            --> Returns true or false (Boolean value)
indexOf : Just like string indexOf()   --> Returns index of that element
join : Creates a string from an array
reverse : Reverse an array             --> destructive method(i.e updates original one and reverse it)
slice : Copies a portion on an array   --> getting element from that index
splice : Removes/Replaces elements     --> destructive method & can add and remove elements
sort : Sort an array                   --> destructive method & sorts the array
-------------------------------------------------------------------------------------------------------*/

//push
let movieLine = ['Colt','Brad','Sam','Sam'];
movieLine.push('Hermione');
movieLine.push("Love");
movieLine.push("Harry");
movieLine.push("Albert","Issac");
console.log(movieLine);

// pop() --> if we trying to pop from empty array we get --> undefined as o/p
let person = movieLine.pop();
console.log(person);

// shift()
movieLine.shift();         // Colt
let a = movieLine.shift(); // Brad

//unshift()
movieLine.unshift("Jerry");
movieLine.unshift("Tom");

// concat()
let dogs = ['Motya',"Rusty","Major"];
let cats = ["Mangi","Snowbell"];
console.log(dogs.concat(cats));  // ---> But does'nt update original array
console.log(dogs);
console.log(cats);

// includes() 
console.log(dogs.includes("Motya"));  // true
console.log(cats.includes("mangi"));  // false

//indexOf()   --> tells the index of value
console.log(movieLine.indexOf("Colt"));  // --> returns -1 as it is absent 
console.log(movieLine.indexOf("Sam"));   // 2

//indexOf()   --> tells from last index of value
console.log(movieLine.lastIndexOf("Colt"));  // --> returns -1 as it is absent 
console.log(movieLine.lastIndexOf("Sam"));   // 3


// reverse()  --> it is the destructive method i.e updates the original array
cats.reverse();
console.log(cats);


// slice()    --> Not updates original array but returns value
let colors = ['red','orange','yellow','green','blue','indigo','violet'];
console.log(colors.slice());        // --> does nothing
console.log(colors.slice(3));       // --> gives array elements from index 3 and above
console.log(colors.slice(3,5));     // --> gives elements from index 3 to 4
console.log(colors.slice(-3));      // --> gives elements from last index
console.clear();


/* splice()   --> Can add and removes elements from and array & it is destructive one
              --> Syntax : array.splice(start_index, howManyDeletes)
              --> Syntax : array.splice(start_index, howManyDeletes, n ValueToAdd)
              --> also returns value 
*/
colors.splice(5,1);
colors.splice(3,2);
colors.splice('sekefkdjk',1); // --> if we enters something else it will deletes values from index 0
colors.splice(4,2); // nothing to delete but no any error
colors.splice(1,0,"Indigo"); // start_frm = 0 , del_Nothing , Add to index[1] = "Indigo"
colors.splice(3,0,"Blue","Pink");
colors.splice(3,0,"Blue","Pink","Skyblue");
colors.splice(3,0,"Blue","Pink","Skyblue",'Golden');
colors.splice(3,2,'DELETED!!');
console.log(colors);


/*-----------------------------------------------------------------------------------------
 Sort()     --> updates original array */

let fruits = ['mango','apple','banana','kiwi','grapes','watermelom'];
let number = [-20,-12,-15,12,0,8,9,100,105,102,30,40];

// Sorting strings arrays
val = fruits.sort();
console.log(val);
// Sorting Number arrays
val = number.sort(); // sorting by the first Number not by value
console.log(val);

// To overcome number sorting problem, Use the "compare function " 
val = number.sort(function(x,y){
    return x - y;
});
// Reverse sort
val = number.sort(function(a,b){
    return b - a;
})
console.clear();

/* --------------------------------Mutidimentional Arrays----------------------------------- 
Multidimentional/Nested Arrays : Arrays within array
-------------------------------------------------------------------------------------------*/

const arr = [
    ["red","Pink"],
    ["blue","Violet"],
    ["green","yellowGreen"],
    ["orange","Yellow"]
]
console.log(arr[0]);
console.log(arr[0][0]);
console.log(arr[2][2]);
console.log(arr);

// ex : Tic Toc Toe
const board = [
    ['0',null,'X'],   
    [null,'X','0'],
    ['X','0',null]
]
console.log(board[0]);
console.log(board[0][0]);
console.log(board[2][2]);
console.log(board);




















