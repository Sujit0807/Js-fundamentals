/* Map : # creates new array with the results of calling a callback on every element in the array
         $ it returns new array if we returns anything from it 
-------------------------------------------------------------------------------------------------*/ 

const numbers = [1,2,3,4,5,6,7];

// const val = numbers.map(function(num){
//     console.log(num);
// });
// console.log(val); // you will get array of undefined if we does'nt returns anything


const val = numbers.map(function(num){  // here num iterate over array
    console.log(num);
    return num;
});
console.log(val); // HERE you will get new array copy of number array in return


const movies = [
    {title : 'Amadeus', score : 99},
    {title : 'Stand By Me', score : 85},
    {title : 'Parasite', score : 95},
    {title : 'Alien', score : 90},
];

const value = movies.map(function(movie){
    return movie.title.toUpperCase();
});
console.log(value); // array of title 