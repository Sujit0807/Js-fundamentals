/* ---------------------------------------------------------------------------------------------------------------
Fetch APIs : # Newer way to make http request instead using XHR via js
             # Support Promises ! and async. await
             # Not Supported in internet explorer
             # it returns Promises
             # Still this is not the perfect solution so that libraries like AXIOS comes in
-----------------------------------------------------------------------------------------------------------------*/
fetch('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log('RESPONCE WAITING TO PARSE',res);   // but this does'nt have data that i wan't  --> it is responce object
        // now this fetch is going to resolve the promise as first data comes in.. but will not wait for untill whole data come
        return res.json();  // when it will get parse we will get the data that we want   // hence we are using .json
        // this res.json() return a promise
    })                                                  
    .then(data => {
        console.log('DATA PARSED.....',data);
        console.log(data.ticker.price);
    })
    .catch(err => {
        console.log('OH NO! ERROR!',err);
    })


// // with async function

const fetchBitcoinPrice = async () => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    }catch (e) {
        console.log('SOMETHING WENT WRONG!!',e);
    }
}

fetchBitcoinPrice();




























