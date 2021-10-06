// Default Parameter Value : # default parameter should always present at last


//Old Way

// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides =  6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }


// New Way

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides ) + 1;
}

console.log(rollDie(20)); 
console.log(rollDie(16,6)); // No ERROR why ?


function greet(msg,person = 'Sam') {
    return `${msg} ${person}`;
}

console.log(greet('Hello'));
console.log(greet('Hello','Colt'));