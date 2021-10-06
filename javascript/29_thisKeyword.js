/* this Keyword : # use the keyword THIS to access other properties on the same objects
                  # The value is depends on the INVOCATION context of the function it is used in
*/

const cat = {
    name : 'Blue Steele',
    color : 'gray',
    breed : 'Scottish fold',
    meow(){
        console.log('THIS IS', this);
        console.log(`${this.name} says MEOWWWWW`);  // this refering to cat object
    }
}

const meow2 = cat.meow;  // meow2 refering to method meow which is in cat object
console.log(meow2);
console.log(meow2());  // says MEOWWWWW         (here no object in left of meow2 means window object is there ) ---> 1

//now 
console.log(cat.meow);
console.log(cat.meow()); // Blue Steele says MEOWWWWW ---> 2


/*--------------------------------------------------------------------------------------------------------------
What is difference between 1 & 2 ?
    2 --> Here we are invoking method meow this refer's to object cat
    1 --> Here we are invoking method meow differently HERE the keyword 'this' not refering to object cat,
          Instead it refers to 'Window' object  

Window: Window is the top level object which includes all the methods in it.
-------------------------------------------------------------------------------------------------------------*/         
console.log(this);  // showing window object
console.log(window); 

function scream(){
    console.log("Ahhhhhhhhhhhhhhhhhhhhhhhhhh");
}

console.log(scream());   // here javascript adds window object to front if we don't add
console.log(window.scream());  // like this, but no one write like this

// you can see here every method is belongs from window object
window.console.log('Hello');
window.alert('alert');
window.console.log(window.Math.pow(2,3));