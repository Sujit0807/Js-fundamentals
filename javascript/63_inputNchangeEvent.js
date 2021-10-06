/* ---------------------------------------------------------------------------------------------------------
   # i wan't to do everytime input get updated rather than submit
   # everytime user not typing by keyboard . They may use voiceover utility and copy pasting
   # so how to update it ? ---> hence we are using input and change events 
   $ if we apply both at a time first 'input' event get fires and then leaving it 'change' event fires

change Event : $ change events happens when we leaves it or blur it
               $ focusing again to it is not a change but adding something means change
               $ just focusing and blur not fires event and key like arrow and shift also dont fires events
               $ so here copy-paste is NOT CONSIDERED as event 

input Event :  $ value get change in input area when we leave that area
               $ after every character input evet gets fired
               $ just focusing and blur not fires event and key like arrow and shift also dont fires events 
               $ so here copy-paste also CONSIDERED as event 
               $ in input event object 'data' is new value that you added

---------------------------------------------------------------------------------------------------------*/
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
console.dir(input);

input.addEventListener('change',function (e) {
    // console.log(e);
    console.log('HELLO');
});

input.addEventListener('input',function (e) {
    h1.innerText = input.value;
    console.log(e);  // input event
    console.log('INPUT EVENT!');
});

