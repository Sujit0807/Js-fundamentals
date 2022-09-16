/* ---------------------------------------------------------------------------------------------------------------
Axios : # Library for making http request 
        $ we have to include the script axios file 
        # it is build by other one that we can include to our to make http request
        # axios uses on both sides i.e client and server
        # it get resolve when everything is fetch
        # compared to fetch we don't have to worry about the whole data getting parsed
        $ axios.get() returns a promise
        $ Here we don't have to parse the data like fetch
----------------------------------------------------------------------------------------------------------------*/

axios.get('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log('ERROR',err);
    })

// with async functions

const fetchBitcoinPrice = async () => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
        console.log(res.data.ticker.price);
    }catch(e){
        console.log('ERROR!!',e);
    }
}

fetchBitcoinPrice();




// Adding headers :

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI');
    newLI.append(jokeText)
    jokes.append(newLI);
    
}
const getDadJoke = async () => {

    try{
        const config = {headers : {Accept : 'application/json'}};   // we can many headers as we want 
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        // here we want only application/json format information from api
        return res.data.joke;
    }catch(e) {
        return 'NO JOKES AVAILABLE! SORRY :(';
    }
    
}

button.addEventListener('click', addNewJoke)

getDadJoke();





















