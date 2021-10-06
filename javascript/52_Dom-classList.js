/* ---------------------------------------------------------------------------------------------------------------------------
classList : # we are using this instead of previous inline styling method
               
---------------------------------------------------------------------------------------------------------------------------*/

const h2 = window.document.querySelector('h2');

// Here we use utility classes 
h2.setAttribute('class','red');
h2.setAttribute('class','border'); // if we do this then it will overwrite the class and make it as border & no color change

// if i wan't to add both the classes then do this
const currentClass = h2.getAttribute('class');
h2.setAttribute('class',`${currentClass} purple`); // using string template literal


/*---------------------------------------------------------------------------------------------------------------------------
$ Above thing is annoying if we have 3 or more properties
$ Hence we are using CLASSLIST
---------------------------------------------------------------------------------------------------------------------------*/

const h1 = document.querySelector('h1');

console.log(h1.classList); // empty DOMTokenList

h1.classList.add('purple');
h1.classList.add('border');

console.log(h1.classList); // ["purple","border", value:"purple border"]

h1.classList.remove('border');

let val1 = h1.classList.contains('border');
let val2 = h1.classList.contains('purple');
console.log(val1); // false
console.log(val2); // true

// toggle --> remove add remove add remove so on...  ---> it returns boolean value
h1.classList.toggle('purple'); // remove 
h1.classList.toggle('purple'); // add 
h1.classList.toggle('purple'); // remove

h1.classList.toggle('border'); // add
h1.classList.toggle('border'); // remove
h1.classList.toggle('border'); // add











