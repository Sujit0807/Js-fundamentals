/*  ------------------------------------------------------------------------------------------------------------------ 
Async. functions : # A newer and cleaner syntax for working with async code! 
                   # Syntax "makeup" for Promises

                   $ ASYNC FUNCTION ALWAYS RETURNS A PROMISE
                   $ if the function returns value, the Promise will be resolved with that value
                   $ if the function throws an exception, the promise will be rejected
                   $ no need to declare promise
                   $ FULLFILLED ===  RESOLVED
 ------------------------------------------------------------------------------------------------------------------ */

async function hello() {
    return 'HELLO SAM';
};

const sing = async () => {
    // throw new Error('OH HOO')    // error makes promise rejected
    throw 'OH NO, PROBLEM!!'; // this will also reject our promise and any syntax error as well

    return 'LA LA LA LA';
}

console.log(sing());  // returns promise whether it is fullfilled or rejected
// Whatever we returns from the async function it will come in to function as argument
sing()
    .then(data => {
        console.log('The song returns :', data);
    })
    .catch(err => {
        console.log('OH NO, PROMISE REJECTED!!',err);
    })


const login = async (username,password) => {
    if(!username || !password)
        throw 'Missing Credentials';
    if(password === 'Corifeetarecute') 
        return 'WELCOME!';
    throw 'INVALID PASSWORD';
};

login('user1','Corifeetarecute')
    .then(msg => {
        console.log('LOGGED IN!');
        console.log(msg);
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(err);
    })

