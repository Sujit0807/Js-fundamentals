/* String : # Group of Character
            # Always use quotes either single('') or (" ")
              but we have to consistent in this
            #
-----------------------------------------------------------------*/

let fName = "Sam";
console.log(fName); // Sujit

let firstName = 'Rahul';
console.log(firstName); // Rahul

// let lastName = 'Gates"; // ERROR
let myNumber = "12";
console.log(myNumber);

let msg = "Hello Everyone!";
console.log(msg); // Hello Everyone

let anotherMsg = "Hey there 'how are you' ";
console.log(anotherMsg); // Hey there 'how are you'

anotherMsg = 'Hey there "how are you" ';
console.log(anotherMsg); // Hey there "how are you"


/*--------------------Indices & Length ---------------------------*/
/* #string indices starts from like other laguages 
   #.length is property*/

let animal = "Elephant and Lion";
console.log(animal[0]); // E
console.log(animal[1]); // l
console.log(animal[3]); // p
console.log(animal[6]); // n
console.log(animal[8]); // space
console.log(animal[13]); // L
console.log(animal[-1]); // undefined
console.log(animal[99]); // undefined

console.log(animal.length)
console.log("Rahul".length) 

let fname = "Sam ";
let lname = "Miller";
console.log(fname+lname);

console.log(1+"Name") // "1Name"
console.log(typeof (1+"Name")) // string

console.clear();


/*------------------------String Methods---------------------------------

destructive methodes : which updates original string
Non-destructive methodes : which does not update original string

destructive methods : 1.

non-destructive methods : 1.toUpperCase()
                          2.toLowerCase()
                          3.trim()
                          4.slice()
                          5.replace()
                          6.repeat()

--------------------------------------------------------------------------*/

// toUppercase()
// toLowercase()
let message = "Leave me alone right now i hate you PLZZZ";
console.log(message);
console.log(message.toUpperCase());
message.toLowerCase();
console.log(message.toLowerCase());

// trim() --> Removes extra spaces
let a = "      i love watermelon          ";
console.log(a);
console.log(a.trim());

// Using 2 methods 
let Greeting = "    Hello again    ";
console.log(Greeting.trim().toUpperCase());
console.log(Greeting.trim().toUpperCase().toLowerCase());

// indexOf() 
Greeting = "Hello Sam Sam";
console.log(Greeting.indexOf("Sam")); // 6
console.log(Greeting.indexOf("l"));   // 2 --> gives first matching char index
console.log(Greeting.indexOf(" "));   // 5
console.log(Greeting.indexOf("z"));   // -1 i.e Not Found

// slice()
console.log(Greeting.slice(6));  // removes first 6 letters i.e from index 0-5
console.log(Greeting.slice(2,7));  // gives string from index 2-6
console.log(Greeting.slice(-2));  // gives last 2 index characters
console.log(Greeting.slice(-3));  // gives last 3 index characters

/* replace() --> # it replace any string with other string
                 # only the first occurrence will be replaced*/
console.log(Greeting.replace("Sam","Rahul"));
console.log(Greeting.replaceAll("Sam","Rahul"));

// repeat() --> No. of times it repeat things only string
console.log("LOL".repeat(5));

console.clear();


/*------------------------String Template literals--------------------------
Here we use backticks:  `` */

let Name = "Sachin";
let Hobby = "Cricket";
let age = 47;
console.log(`Hello ${Name.toUpperCase()} . your hobby is ${Hobby.toUpperCase()}. your age is ${age}. `);




















