/* Destructuring Objects : # it more practical than arrays
---------------------------------------------------------------------------------------------------------*/

const user = {
    email : 'harvey@gmail.com',
    password : 'harvey123',
    firstName : 'Harvey',
    lastName : 'Milk',
    born : '1930',
    died : '1978',
    bio : 'Harvey Bernard Milk was an American politician',
    city : 'San Fransisco',
    state : 'California',
};


// without destructuring of objects :

// const firstName = user.firstName ; 
// const lastName = uset.lastName; // and so on..

const {firstName,lastName,email,hello,...everythingElse} = user; // here order not matters

console.log(firstName);
console.log(lastName);
console.log(email);
console.log(everythingElse); // objects of remaining things

console.log(hello); // undefined coz we are accessing key but no hello key present


// vvv.imp : But i want to rename that key
const {born : birthYear, password = 'NA'} = user;  // renaming the keys
console.log(birthYear);
console.log(password); // harvey123 value of password is not change coz it is already present




const user2 = {
    email : 'stacy@gmail.com',
    firstName : 'Stacy',
    lastName : 'Gonzalez',
    born : '1987',
    city : 'Tulsa',
    state : 'Oklahoma',
};

const {password2 = 'Stacy123'} = user2;
console.log(password2); //  Stacy123 coz password2 was not in user2 object









