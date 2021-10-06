/* ------------------------------------------------------------------------------------------------------------------ 
Creating our own promises : # while creating promises use 'new' keyword and Promise with capital 'P'
                            # it accepts a callback functions with two parameters in it with any name but we usually give 
                              as RESOLVE AND REJECTED
-------------------------------------------------------------------------------------------------------------------*/ 
new Promise((resolve,reject) => {
    resolve();  // gives us resolved promise
    reject();   // gives us rejected promise

    // if i write nothing in this it will show us pending
});


const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {                // here we can use normal function as callback 
        const rand = Math.random(); 
        // console.log(rand);
        setTimeout(() => {
            if(rand < 0.7){
                resolve('YOUR FAKE DATA IS HERE');
            }
            reject('Request Error !!');
        },1000)
    })
};

fakeRequest('dogs.com')
    .then((data) => {
        console.log('DONE WITH REQUEST !!');
        console.log(data);
        return fakeRequest('dogs/page1')
    })
    .then((data) => {
        console.log('Done with request !!');
        console.log(data);
        return fakeRequest('dogs/page2')
    })
    .then((data) => {
        console.log('Done with request !!');
        console.log(data);
    })
    .catch((data) => {
        console.log('OH NO REQUEST ERRORs!!');
        console.log(data);
    })

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
};

delayedColorChange('red',1000)
    .then(() => delayedColorChange('orange',1000))                  // here we can use implicit return 
    .then(() => delayedColorChange('yellow',1000))
    .then(() => delayedColorChange('green',1000))
    .then(() => delayedColorChange('blue',1000))
    .then(() => delayedColorChange('indigo',1000))
    .then(() => delayedColorChange('violet',1000))


















