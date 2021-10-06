/* Types of Loops : # for loop
                    # for of and for in loop
                    # while loop
                    # do-while loop
---------------------------------------------------------------------------------------*/ 
// for Loop :

for(let i=1;i<=10;i++){
    console.log("I am in Loop Body!!");
    console.log(i);
}
for(let i=25;i>=0;i-=5){
    console.log(i);
}
for(let i=0;i<=20;i+=2){
    console.log(i);
}
for(let i=1;i<=20;i+=2){
    console.log(i);
}
console.clear();


// looping over arrays
let persons = ["Sam",'colt','Harry','Harshit','Brad'];
for(let i=0;i<persons.length;i++){
    console.log((persons[i]).toUpperCase);
}


// Nested for loop:

let str = 'LOL';
for(let i = 0; i<=4 ; i++){
    console.log('Outer: ',i);
        for(let i=0;i<str.length;i++){
            console.log("   Inner: ",str[i]);
        }
}

const seatingChart = [
    ['Hermione','Sam'],
    ['Vaishnavi','Sandy','Rutuja'],
    ['Rahul','Sachin']
];

for(let i=0;i<seatingChart.length;i++){
    console.log(`Desk : ${i}`);
        for(let j=0;j<seatingChart[i].length;j++){
            console.log(`   Student ${j+1} : ${seatingChart[i][j]}`);
        }
}

for(let i=0;i<seatingChart.length;i++){
    console.log(`Desk : ${i}`);
    const row = seatingChart[i];
        for(let j=0;j<row.length;j++){
            console.log(`   Student ${j+1} : ${row[j]}`);
        }
}console.clear();

/*------------------------------------------------------------------------------------*/
// While loop : when we don't know that how many times we have to loop

let num = 4;
while(num>=0){
    console.log(num);
    num--;
}


//Game :
const SECRET = 'BabyHippo';
let guess = prompt("Enter the Secret code....");
while(guess !== SECRET){
    guess = prompt("Guess the Secret code....");
}console.log("Congrats! You got the Code");



















