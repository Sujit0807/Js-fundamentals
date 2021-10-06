/* Reduce Method : # Executes a reducer function on each element of the array, resulting in a single value
                   # it takes an array and reduces to single value
                   $ it also takes function as argument
                   $ optional function for finding sum of array, multiplication, min value in array etc
-----------------------------------------------------------------------------------------------------------*/

const prices = [19.99,20.5,20.99,9.99,10.52,62];

// let total = 0;
// for(let i of prices){
//     total += i;
// }
// console.log(total); // 143.989..


// const total = prices.reduce((sum,price) => (       // first time : sum = 19.99 & price = 20.5  return 40.489
//     sum + price                                    // Second time: sum = 40.489 & price = 20.99 return 61.479 and so on..
// ))


const total = prices.reduce((sum,price) => sum + price );
console.log(total); // 143.989..

const mult = prices.reduce((sum,price) => sum * price );
console.log(mult);

const minValue = prices.reduce((min,price) =>{
    if(min < price){
        return min;
    }return price;
});
console.log(minValue);



const movies = [
    {title : 'Amadeus', score : 99, year : 2001},
    {title : 'Stand By Me', score : 85, year : 2012},
    {title : 'Parasite', score : 95, year : 1997},
    {title : 'Alien', score : 90, year : 1968},
    {title : 'pk', score : 92, year : 1999},
    {title : 'Dangal', score : 99, year : 2018},
    {title : 'Bahubali', score : 100, year : 2015},
];

const highestRated = movies.reduce((bestMovie,currMovie) => {
    if(bestMovie.score > currMovie.score){
        return bestMovie;
    }
    return currMovie;
});

console.log(highestRated);



// Second Parameter for Reduce :
const evens = [2,4,6,8];
const sum = evens.reduce((sum,num) => sum + num , 100);  // 100 is the initial value for sum
console.log(sum); // 120





















