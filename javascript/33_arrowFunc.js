/* Arrow Functions : $ This is newer syntax for defining functions
                     $ Syntactically compact alternative to regular function expression
------------------------------------------------------------------------------------------*/

// const add = function(x,y){
    //     return x + y;                  //  --> old syntax
    // };     

    const add = (x,y) => {
        return x + y;                     // --> new compact syntax in ES6
    };
    
    console.log(add(9,3));
    
    
    const square = (x) => {
        return x ** 2;
    }
    
    console.log(square(2));
    
    
    const rollDie = () =>{
        return Math.floor(Math.random() * 6) + 1;
    }
    
    console.log(rollDie());
    

    // Another Syntax for 1 parameter only not for more than 2 parameter nor for 0 parameter
    const num = x =>{
        return x;
    }

    console.log(12);


/*---------------------------------------------------------------------------------------------
All below things do's same thing 
---------------------------------------------------------------------------------------------*/
const isEven = function(num){ // regular function expression
    return num % 2 === 0;
};

const isEVEN = (num) => {  // arrow function with parenthesis around parameter
    return num % 2 === 0;
};

const isEveN = num => {   // no parethesis around parameter
    return num % 2 === 0;
};

const ISEVEN = num => (  // implicit return  ---> here we don't need to write return keyword
    num % 2 === 0        // implicit function works only when in body only one expression/statement is there  
    // let msg = 'hii'   // so this statement will give us error
);

const IsEven = num => num % 2 === 0;  // one-liner Implicit return

const Add = (x,y) => (
    x + y
)

const sub = (x,y) => x - y ;
console.log(sub(5,6));


// -----------------------------------------------------------------------------------------------

const movies = [
    {title : 'Amadeus', score : 99},
    {title : 'Stand By Me', score : 85},
    {title : 'Parasite', score : 95},
    {title : 'Alien', score : 90},
];

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie['score']/10}`;      // --> without arrow function
// });


// using Arrow function :
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie['score']/10}`
))

const NewMovies = movies.map(movie => `${movie.title} - ${movie['score']/10}`)

console.log(newMovies);
console.log(NewMovies);

























