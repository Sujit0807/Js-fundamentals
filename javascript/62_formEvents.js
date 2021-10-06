/* -------------------------------------------------------------------------------------------------------------
   # Now we want to take that data and add it to under 
   # value holds value whatever we type
   # for forms we have object called as element object which will have all elements in it
   $ if we gives the 'name' to elements in forms then it will present in element object as PROPERTY
---------------------------------------------------------------------------------------------------------------*/

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (event) {

    // alert('SUBMIT!');
    // console.log('Submit!'); // for seconds only it will display
    event.preventDefault(); // it will prevent our data & will not get disappear & we will also on same page
    // i.e not sends the request


    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    console.dir(tweetForm);

    // so we can access above two like coz forms has that element objects
    // REMEMBER WHATEVER U GAVE NAME TO ELEMENT use that only to access e.g here UserName
    const usernameInput = tweetForm.elements.UserName;
    const tweetInput = tweetForm.elements.Tweet; // as we gave name to input as Tweet
    myTweet(usernameInput.value,tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
    
});




const myTweet = (username,tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag,`- ${tweet}`);
    // console.log(newTweet);
    tweetContainer.append(newTweet)
}



// let val = document.querySelectorAll('input')[1].value = 'No i dont'; // this value will be in input box
 