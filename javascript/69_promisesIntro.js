/* ---------------------------------------------------------------------------------------------------------------------
 Enter Promises : A promise is an object representing the eventual completion or failure of an asynchromous operation
                  

 Asynchronus : At a same time many things happening
 Syncronous  : one by one things are happening 

 There are three ways to write code in asynchronous way in javaScript :
             # callbacks func : function which takes functions e.g setTimeout()   [function which is passed as argument]
             # promises 
             # Async/await


 promise : # A promise is a returned object to which you attach callbacks, instead of passing callbacks into to function 
           # The Promise object represents the eventual completion (or failure) of an asynchronous operation and its
             resulting value.
----------------------------------------------------------------------------------------------------------------------*/

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}


// here we have to wait for first responce then going to second request --> with help of callbacks things becomes nasty
// making chain of request 

fakeRequestCallback('books.com/page1',
function (response) {
    console.log("IT WORKED!!!!")
    console.log(response)
    fakeRequestCallback('books.com/page2',
    function (response) {
        console.log("IT WORKED AGAIN!!!!")
        console.log(response)
        fakeRequestCallback('books.com/page3',
        function (response) {
            console.log("IT WORKED AGAIN (3rd req)!!!!")
            console.log(response)
        },
        function (err) {
            console.log("ERROR (3rd req)!!!", err)
        })
    },
    function (err) {
        console.log("ERROR (2nd req)!!!", err)
    })
},
function (err) {
    console.log("ERROR!!!", err)
})


/*---------------------------------------------------------------------------------------------------------------------------------------
THE PROMISE VERSION  :  # above things looking ugly and nasty so Promises comes in
                        # Promises has 3 states --> pending, resolved/fullfilled, rejected
                        # so what we can do, we can run the code when the promises resolved or rejected by attaching objects to promise 
                          itself
                        # we are using then() and catch() which accepts callback function, when it is resolved and rejected respectively
                        # why we did'nt defining resolve and reject function
---------------------------------------------------------------------------------------------------------------------------------------*/

const fakeRequestPromise = (url) => {
    // const promise =  new Promise((resolve, reject) => {... }            // or      
    return new Promise((resolve, reject) => {                             // Promise object  we can give any name to params
        const delay = Math.floor(Math.random() * (4500)) + 500;           // promise calls callback function by itself only
        setTimeout(() => {                                                // under callack there are again two functions
            if (delay > 3000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
    // return promise;
}


let responce = fakeRequestPromise('flipkart.com');
console.log(responce);   // pending 
console.log(responce);   // fulfilled/resolved

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!!! (page1)")
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("IT WORKED!!!!!! (page2)")
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log("IT WORKED!!!!!! (page3)")
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR!!! (page3)")
                    })
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page2)")
            })
    })
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)")
    })


// THE CLEANEST OPTION WITH THEN/CATCH        
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!

fakeRequestPromise('yelp.com/api/coffee/page1')         // returns Promise
    .then((data) => {                                   // then is for resolve() func
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {                          // catch is for rejected()
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })
































