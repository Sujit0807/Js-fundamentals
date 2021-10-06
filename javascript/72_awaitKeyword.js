/*------------------------------------------------------------------------------------------------------------------ 
await keyword : # We can only use the await keyword inside of functions declared with async.
                $ await will pause the execution of the function, WAITING FOR A PROMISE TO BE RESOLVED
                before continuing on..
------------------------------------------------------------------------------------------------------------------ */

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
};

delayedColorChange('red',1000)
    .then(() => delayedColorChange('orange',1000))
    .then(() => delayedColorChange('yellow',1000))
    .then(() => delayedColorChange('green',1000))
    .then(() => delayedColorChange('blue',1000))
    .then(() => delayedColorChange('indigo',1000))
    .then(() => delayedColorChange('violet',1000))



// Above code is also nice but we can do this with async. functions

async function rainbow() {
    await delayedColorChange('red',3000);    // ha houde mg below wala execute karato
    await delayedColorChange('orange',1000);
    await delayedColorChange('yellow',1000);
    await delayedColorChange('green',1000);
    await delayedColorChange('blue',1000);
    await delayedColorChange('indigo',1000);
    await delayedColorChange('violet',1000);
    return 'END OF RAINBOW!';
};

// rainbow().then((msg) => console.log(msg));

// or

async function printRainbow() {
    await rainbow();
    console.log('ALL DONE');
}

printRainbow();



const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {                // here we can use normal function as callback 
        const rand = Math.random(); 
        console.log(rand);
        setTimeout(() => {
            if(rand < 0.2){
                resolve('YOUR FAKE DATA IS HERE');
            }
            reject('Request Error !!');
        },3000)
    })
};


async function makeFakeRequest() {
    try{
        let data1 = await fakeRequest('page1/');   // wait untill it is getting resolved
        let data2 = await fakeRequest('page2/');
        console.log(data1);
        console.log(data2);
    }catch(e){
        console.log('CAUGHT AN ERROR!');
        console.log('ERROR is : ' ,e);
    }
}

makeFakeRequest();




























