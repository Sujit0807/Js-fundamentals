/* ----------------------------------------------------------------------------------------------------------------------------
# JavaScript is single threaded : At any given point in time, that single JS thread is running at most one line of JS code
                                  i.e one task (runs) at one time
-----------------------------------------------------------------------------------------------------------------------------*/

console.log('Sending request to server');   // 1

setTimeout(() => {
    console.log('Here is your data from the server....');  // 3  --> Web APIs function handled by browser
},3000);

console.log('I AM AT THE END');   // 2

/* as JS is single threaded how third line get printed out before setTimeout() function (as one line at one time) ?
--> Answer is Actually browser does this work not the javaScript ! coz that browser written in any other language like cpp not 
    in javaScript.

  OKKK BUT HOW ?
--> Browser comes with web APIs that are able to handle certain task in the background ( like making request or setTimeout ).
    The JavaScript call stack recognizes these Web APIs function and passes them off to the browser to take care of.
    once the browser finishes those tasks, they return and are pushed into the Stack as a callback.


WEB APIs : Web APIs are the methods that we can call from javaScript
*/
























