/* Scope(Variable Visibility) 
        Types of Scope : 1. function Scope
                         2. Block Scope
                         3. lexical Scope

------------------------------------------------------------------------------------------------------------------
1. function Scope  : $ VAR KEYWORD is scoped to function scope but not to blocks
----------------------------------------------------------------------------------------------------------------*/

function collectEggs(){
    let totalEggs = 6;
}
// console.log(totalEggs); // ERROR --> totalEggs is not defined(coz it is scoped to collectEggs function)


let bird = 'Parrot';

function birdWatch(){
    let bird = 'Eagle';
    console.log(bird); // Eagle  --> coz it has function scope so it will see first local one before global one as their name are same
}
birdWatch();
console.log(bird); // Parrot


let total = 9.2; // Global Variable

function myPointer(){
    console.log(total);  // 9.2 --> can access global variable under function
}
myPointer();


const creature = "Common Sea Dragon";

function scubaDive(){
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}
 
scubaDive();
console.clear();



/* --------------------------------------------------------------------------------------------
2.Block Scope : $ BLock Scope is for LOOPS and for CONDTIONAL statements
                $ if we use VAR KEYWORD they are NOT scope to blocks but Scoped to functions
----------------------------------------------------------------------------------------------*/

let radius = 8;
if(radius > 0){
    const PI = 3.14159;
    let msg = 'HIII';
    console.log(msg); // HIII
}
console.log(radius);
// console.log(PI); // ERROR i.e PI not defined
// console.log(msg); // ERROR i.e msg not defined


for(let i = 0; i < 5; i++){
    let msg = "Hello";
    console.log(msg);  // Hello
}
// console.log(msg) // ERROR i.e msg not defined
// console.log(i);  // ERROR i.e i is not defined


//vv.imp : if we use VAR KEYWORD they are NOT scope to blocks but Scoped to functions 
for(var j = 0; j < 6; j++){
    var msg = "HII";
}
console.log(msg);   // HII
console.log(j);     // 6 
console.clear();


/*----------------------------------------------------------------------------------------------
 3.Lexical Scope : $ function which inside a function has access to outer function variable 
----------------------------------------------------------------------------------------------*/

function bankRobbery(){
    const heroes = ['SpiderMan','IronMan','BlackPanther','Wolverine'];
    function cryForHelp(){
        for(var hero of heroes){
            console.log(`PlEASE HELP US, ${hero}`);
        }
        // console.log(hero);  // can be access here 
    }
    cryForHelp();
    // console.log(hero);  // cannnot be access here 
}
bankRobbery();
// console.log(hero);  // cannot be access here 










