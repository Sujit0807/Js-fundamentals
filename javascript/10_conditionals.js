/* Conditionals : # making decisions with code
*/

const age = 19;
const a = '20';

//-------------------if-else-----------------------

if(age==19){
    console.log("Age is 19");
}else{
    console.log("Age is Not 19");
}

// == (double equal to check only value not data type ) 
if(age =='19'){
    console.log("Age is 19");
}else{
    console.log("Age is Not 19");
}

// if we want to check value as well as type use === (3 equal to)
if(age === '19'){
    console.log("Age is 19");
}else{
    console.log("Age is Not 19");
}


//----------------- Greater or Less than---------------

if(a > 19){
    console.log("You are eligible to Vote");
}else{                                                    
    console.log("You are not eligible to Vote");
}

let id = '101';

if(id >= 100){
    console.log("You are id is correct!");  // op
}else{                                                    
    console.log("your id is incorrect!!"); 
}


// ----------------if-else if-else---------------------

if(age == 19){
    console.log("Age is 19");
}else if(age==20){
    console.log("Age is 20");
}else{
    console.log("Cannot Predict");
}
// console.clear();


// -----------------Examples---------------------------

let vari;

if(vari){
    console.log("vari is defined"); // no o/p
}


if(typeof vari === "undefined"){
    console.log("vari is not defined");
}else{
    console.log("vari is defined");
}
// console.clear();


// -----------------------------------------------------

const doesDrive = false;
// const doesDrive = false || true;
// const doesDrive = false && true;
// const doesDrive = true && true;

if(doesDrive){
    console.log("You can Drive");
}else{
    console.log("plzz don't drive");
}


if(age>18 && doesDrive){                // && - Logical and 
    console.log("you can drive")
}else{
    console.log("plzz don't drive");
}


if(age>18 || doesDrive){               // || - logical or
    console.log("you can drive")
}else{
    console.log("plzz don't drive");
}
// console.clear();


// ---------------------- Ternery operator-------------------

console.log(age==18 ? "age is 18 ":"age is not 18");
console.log(id === 101 ? "id is 101" : "id is not 101");


//------------------------ Switch Case -----------------------

switch(age){
    case 18:
        console.log("Your age is 18");
        break;
    case 19:
        console.log("Your age is 19");
        break;
    default:
        console.log("Exit");
        break;
}


// -----------------withoutBraces---------------------------

const AGE = 4;
if(AGE < 5)
    console.log("your age is 5"); //op
else if(AGE < 10)
    console.log("your age is not 10");
else
    console.log("Your age is greater than 10")