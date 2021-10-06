/* Rest params : $ Rest looks like spread but it is NOT. it is opposite of spread
                 # Available inside every function
                 # It's an array like object :
                        1.Has length property
                        2.Does NOT array methods like push/pop
                 # Contains all the arguments passed to the function
                 # Not Available inside arrow functions !
                 $ arguments is an object --> we can customize argument name like e.g nums
                 $ collects all remaining arguments into an actual array
---------------------------------------------------------------------------------------------------------*/

function sum() {
       console.log(arguments);
};

sum();


function add() {
       console.log(arguments);
       // console.log(typeof arguments);   // Object
       // return arguments.reduce((total,el) => total + el); //ERROR coz arguments is not an array, so here REST comes
};

add(12,24,36);


function mult(...nums) {
       console.log(nums); // array of nums
       return nums.reduce((total,el) => total + el); // 20
};

console.log(mult(2,3,4,5,6));

function raceResults(gold,silver, ...everyoneElse) {  // collected rest into everyone else
       console.log(`GOLD MEDAL GOES TO : ${gold}`);       
       console.log(`SILVER MEDAL GOES TO : ${silver}`);       
       console.log(`AND THANKS TO EVERYONE ELSE : ${everyoneElse}`);       
}

raceResults('COLT','SAM','RAHUL','SACHIN','ATHARV');




























