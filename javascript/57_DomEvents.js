/* ---------------------------------------------------------------------------------------------------------
   EVENTS :        # Responding to user input and actions !
                   # events are the keys to create any type of interactive websites

inline Events :    # inline events we write in html file in that we write javaScript code
                   # but this thing is annoying and increases html document code

onclick property : # onclick is not camelCase and it is single word
                   # it is property not a function

onmouseenter :     # function is called when we mouse over it
                   # BUT STILL IT IS NOT BETTER APPROACH
---------------------------------------------------------------------------------------------------------*/
const btn = document.querySelector('#v2');
console.dir(btn);

btn.onclick = function () {
    console.log('YOU CLICKED ME!!');
    console.log('I HOPE IT WORKED!!');
}

function scream(){
    console.log("AAAAAHHHHH");
    console.log(`STOP TOUCHING ME!`);
}

btn.onmouseenter = scream; // just passing funtion name not calling it

const button1 = document.querySelector('button');
console.dir(button1);

document.querySelector('h1').onclick = function () {
    alert('why did you clicked me ?');
}


























