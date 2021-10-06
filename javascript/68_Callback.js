/*---------------------------------------------------------------------------------------------
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
},1000)

setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
},2000)

setTimeout(() => {
    document.body.style.backgroundColor = 'YELLOW';
},3000)
----------------------------------------------------------------------------------------------*/

// instead of doing above thing we can do like this below

setTimeout(() => {
    document.body.style.backgroundColor = 'greenyellow';
    setTimeout(() => {
        document.body.style.backgroundColor = 'lightblue';
        setTimeout(() => {
            document.body.style.backgroundColor = 'lightcyan';
        },1000)
    },1000)
},1000)


/*----------------------------------------------------------------------------------------------
or instead we do this :
----------------------------------------------------------------------------------------------*/

// if one thing happens then and then other should happen

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    },delay);
};


delayedColorChange('red',1000, () => {
    delayedColorChange('orange',1000, () => {
        delayedColorChange('yellow',1000, () => {
            delayedColorChange('green',1000, () => {
                delayedColorChange('blue',1000, () => {
                });
            });
        });
    });
});



/* but sometimes we don't know after how much it should happen

searchMoviesAPI('amadeus',() => {
    saveToMyDB(movies, () => {
        // IF IT WORKS, RUN THIS :
    }, () => {
        // IF DOESN'T WORK, RUN THIS:
    })
},() => {
    // IF API IS DOWN, OR REQUEST FAILED
})



to make this(callback func) things easy JavaScript provides us async. func & promises
*/












