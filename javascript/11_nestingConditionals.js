/* Nesting conditions : conditions uunder conditions */

const password = prompt("Enter your new password");
if(password.length >= 6){
    if(password.indexOf(" ") === -1){
        console.log("Valid Password");
    }
    else{
        console.log("PASSWORD CANNOT CONTAINS SPACES!");
    }
}else{
    console.log("YOUR PASSWORD IS TOO SHORT> It Must be of 6+ characters");
}

// Checking if any space is there or not

































