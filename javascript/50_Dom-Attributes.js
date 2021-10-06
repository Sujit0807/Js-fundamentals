/*--------------------------------------------------------------------------------------------------------
 Attributes :   $ id and class are also considered as attributes
                $ when we use getAttribute() method is directly going to give op from html itself
                  but when we use .attributeName it is giving op from javaScript object
--------------------------------------------------------------------------------------------------------*/

document.querySelector('#banner').id='Whoops'; // changing an id
document.querySelector('#Whoops').id='banner'; // again changin g an id

console.log(document.querySelector('#banner').src); // gives us the src of img


const firstLink = document.querySelector('a');


/*--------------------------------------------------------------------------------------------------------
getAttribute() & setAttribute() :
--------------------------------------------------------------------------------------------------------*/

console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));
firstLink.setAttribute('href','https://www.google.com'); // we can also set the attribute

const input = document.querySelector('input[type="checkbox"]');
console.log(input);
