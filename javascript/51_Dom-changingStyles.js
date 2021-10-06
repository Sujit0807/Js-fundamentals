/*----------------------------------------------------------------------------------------------------------------
 Style property :   $ normally in css things is like font-size but in javaScript they are camelCase like fontSize
                      in javascript that dash(-) is unknown
                    $ this style object will not contain any property which is in css file but they contains property 
                      of css which is in inline css 
----------------------------------------------------------------------------------------------------------------*/

const h1 = document.querySelector('h1');

console.log(h1); // get the h1 object
console.log(h1.style);
console.log(h1.style.color); // Nothing coz we did'nt apply any inline css for h1 object if write then we will get that into our object


// Now we are writing inline css for h2 object
const h2 = document.querySelector('h2');

console.log(h2); // h2 object
console.log(h2.style); // style object for h2
console.log(h2.style.color); // Magenta

h1.style.color = 'green';
h2.style.color = 'red';

h1.style.fontSize = '3em' // Remember no dash between font and size use camelCase & in quotes 3em
h2.style.fontSize = '4em' // Remember no dash between font and size use camelCase & in quotes 4em

h1.style.border = '4px solid red'; // although we don't prefer this way to change css styles
h2.style.border = '4px solid blue';

console.log(h1.style.color); // green 
console.log(h2.style.color);  // red


const allLinks = document.querySelectorAll('a');
for(let link of allLinks){
  link.style.color = 'rgb(255,0,0)';
  link.style.textDecorationColor = 'rgb(0,0,255)';
  link.style.textDecorationStyle = 'wavy';
}

// REMEMBER : HERE WE DON'T PASS ELEMENT IN QUOTES
// Now checking fontSize from css is not that much good in perspective of javaScript so we ue

console.log(window.getComputedStyle(h1)); // css style declaration
console.log(window.getComputedStyle(h1).color); 
console.log(window.getComputedStyle(h1).fontFamily); 
console.log(window.getComputedStyle(h2).fontSize);  // if there are more than 2 same element then it will give for first one
































