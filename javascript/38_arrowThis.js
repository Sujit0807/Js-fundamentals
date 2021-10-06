/* Arrow Function with 'this' keyword : # arrow func behaves differently with this keyword compare to normal function

----------------------------------------------------------------------------------------------------------------------*/


// Normal function : 

// const person = {
//     firstName : 'Viggo',
//     lastName : 'Mortensen',
//     fullName : function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// console.log(person.fullName());  // Viggo Mortensen


/*------------------------------------------------------------------------------------------------------------------------------------------
 Arrow Function :   $ inside arrow func 'this' refers to scope which is created in.
                    $ i.e it refers to window object
                    $ in normal function it does'nt deal with scope where the function is created but deal with how the func executed
-------------------------------------------------------------------------------------------------------------------------------------------*/
const person = {
    firstName : 'Viggo',
    lastName : 'Mortensen',
    fullName : () => {
        console.log(this); // refering to window object
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName : function(){
        // setTimeout(function(){
        //     console.log(this); // window  coz setTimeout is like window.setTimeout
        //     console.log(this.fullName())  //therefore  it is like window.fullName() and hence we will get error
        // }, 3000);

        setTimeout(() => {
            console.log(this); // refers to person object
            console.log(this.fullName())  //therefore  it is like window.fullName() and hence we will get error
        }, 3000);
    }
};

// console.log(person.fullName());  // undefined undefined
console.log(person.shoutName()); // setTimeout is window object method
console.clear();



