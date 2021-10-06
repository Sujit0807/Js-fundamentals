/* Logical Operator : used for combining Expressions 

Types : 1.logical AND --> && : true && true = true, otherwise false
        2.logical OR  --> || : false || false = false , otherwise true
        3.logical NOT --> !  : !true = false , !false = true
--------------------------------------------------------------------------*/

// Logical AND : if first is false then it will not check for the second one

const password = prompt("Enter the password");
if(password.length >=6 && password.indexOf(" ") === -1){
    console.log("VALID PASSWORD");
}else{
    console.log("INCORRECT FORMAT FOR PASSWORD!");
}


/*-------------------------------------------------------------------------- 
Logical OR : if first is true then it will not check for the second one

1 !== 1 || 10 === 10  --> true
10/2 === 5 || null    --> true
0 || undefined        --> false 

NOTE : && has more precedence than || */

let age = -10;
if(age >= 0 && age < 5 || age >65){   
    console.log("FREE");
}else if(age > 5 && age < 10){
    console.log("$10");
}else if(age >= 10 && age < 65){
    console.log("$20");
}else{
    console.log("INVALID AGE!");
}


/*---------------------------------------------------------------------------
 Logical NOT(!) : expression returns true if it is false. */

 console.log(!null); // true
 console.log(!!null); // false
 console.log(!!!null); // true
 console.log(!false); // true
 console.log(!true); // false
 console.log(!NaN); // true
 console.log(!undefined); // true
 console.log(!0); // true
 console.log(!1); // false
 console.log(!(1 < 5)); // false
 console.log(!(1 > 5)); // true

let firstName = prompt("Enter the first name");
if(!firstName){
    console.log("TRY AGAIN!!");
}else{
    console.log("GOOD!!");
}

age = 45;
if(!(age >= 0 && age < 5 || age >= 65)){
    console.log("YOU ARE NOT A BABY OR A SENIOR!!");
}
