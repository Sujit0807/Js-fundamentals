/* filter Method : # creates a new array with all elements that passes the test
                     implemented by the provided function
                   # it accepts function as it's argument like map
                   # it also return array like map but when it is true
--------------------------------------------------------------------------------------------*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const array = numbers.filter(n => {
    return n < 10;   // our call back returns true or false 
    // if it returns true, n is added to new array
})
console.log(array);



const movies = [
    {title : "Amadeous", score : 99, year : 1984},
    {title : "Stand by me", score : 85, year : 1986},
    {title : "parasite", score : 89, year : 2019},
    {title : "Aliens", score : 90, year : 1979},
];


const goodMovies = movies.filter(movie => {
    return movie.score > 90 ;
});
console.log(goodMovies);

const badMovies = movies.filter(m => (m.score < 90));
console.log(badMovies);

const recentMovies = movies.filter(m => (m.year ===  2019));
console.log(recentMovies);

const newMov = movies.filter(movie => movie.score > 80 ).map(m => m.title);
console.log(newMov);


// sometimes we do like this indented(this is also fine)

// const newMov = movies.
//                 filter(movie => movie.score > 80 )
//                 .map(m => m.title);