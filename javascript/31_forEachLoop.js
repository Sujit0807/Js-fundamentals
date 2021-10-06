/* ForEach Loop : # it accepts a callback function 
                  # calls the function once per element in the array
                  $ forEach loop calls the function by its own we don't have to call the func
                  $ forEach does'nt returns anything like Map
----------------------------------------------------------------------------------------------*/

const numbers = [5,6,4,7,8,9,1,0,2,3,11,12,14,15,20];

// function print(element){
//     console.log(element);
// }

numbers.forEach(function(n){  
    // console.log(n);
    if(n%2 === 0){
        console.log(n);
    }
});


const movies = [
    {title : 'Amadeus', score : 99},
    {title : 'Stand By Me', score : 85},
    {title : 'Parasite', score : 95},
    {title : 'Alien', score : 90},
];

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie['score']}/100`);
});


