/* for...of loop : # It is only used in while iterating arrays/ strings.
                   # SYNTAX : for(variable_name of ArrayName/string)
------------------------------------------------------------------------*/
const subreddits = ['cringe','books','chickens','funny','pics','soccer','gunners'];

for(let value of subreddits){
    console.log(`visit reddit.com/r/${value}`);
}

const seatingChart = [
    ['Hermione','Sam'],
    ['Vaishnavi','Sanket','Rutuja'],
    ['Rahul','Sachin']
];

for(let row of seatingChart){
    console.log('Students On Desk :')
    for(let student of row){
        console.log(`   ${student}`);
    }
}

for(let char of 'Hello Colt Steele sir'){     // prints character one by one
    console.log(char);
}

let str = " My name is Sam";
for(let i of str){
    console.log(i);
}


/*--------------------------- Iterating Over Objects -----------------------------------
Objects : # It is not iterable
          # They don't have the lengths

for...in loop : # which is used to iterate over objects
                # It gives us only keys
----------------------------------------------------------------------------------------*/

const testScores = {
    sujit : 92,
    Rahul : 93,
    Hermione : 94,
    Colt : 98,
    Harry : 98,
    Harshit : 99
}
for(let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}

//we have other methods also : # they will gives us array of keys, values and entries(array[key,value] in array)
console.log(Object.keys(testScores));  
console.log(Object.values(testScores));
console.log(Object.entries(testScores));


// finding avg and sum :
let sum = 0,count = 0;
for(let score of Object.values(testScores)){
    sum += score;
    count++;
}
let avg = sum/count;
console.log(`Sum of Score is ${sum} and it's avg is ${avg}`);



























