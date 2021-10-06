/*  Param Destructuring  :  */


const user = {
    email : 'stacy@gmail.com',
    firstName : 'Stacy',
    lastName : 'Gonzalez',
    born : '1987',
    city : 'Tulsa',
    state : 'Oklahoma',
};


// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }


// Parameter destructuring
function fullName(user) {
    const {firstName,lastName} = user;
    return `${user.firstName} ${user.lastName}`;
}

// But we do like this
function fName({firstName,lastName}) {
    return `${firstName} ${lastName}`;
}

console.log(fullName(user));
console.log(fName(user));




const movies = [
    {title : "Amadeous", score : 99, year : 1984},
    {title : "Stand by me", score : 85, year : 1986},
    {title : "parasite", score : 89, year : 2019},
    {title : "Aliens", score : 90, year : 1979},
];



const bestMovies = movies.filter((movie) => movie.score >= 90);
console.log(bestMovies);

const mov = movies.map(movie => {
    return  `${movie.title} ${movie.year} is rated ${movie.score}`;
});

console.log(mov);



// But we can shorten up like this :

const badMovies = movies.filter(({score}) => score <= 90);
console.log(badMovies);

const Movie = movies.map(({title,score,year}) => {   // we can't take another name which is not in Movie
    return  `${title} ${year} is rated ${score}`;
});

console.log(Movie);