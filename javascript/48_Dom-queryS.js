/*---------------------------------------------------------------------------------------------------------
querySelector() :    $ it is newer and better way to select things from DOM
                     $ all in one method to select single
                     $ BUT IT SELECTS ONLY FIRST ONE

querySelectorAll() : $ it selects all element with that class, tagName, attributes
                     $ it returns a collection of matching elements
                     $ it returns Nodelist
---------------------------------------------------------------------------------------------------------*/

// finds first p element
const e = document.querySelector('p');

// finds first element with ID of banner
const i = document.querySelector('#banner');

// finds first element with class of square
const c = document.querySelector('.square');

console.log(e);
console.log(i);
console.log(c);


// selecting with attribute :
const a = document.querySelector('a[title="Java"]');
console.log(a);


/*---------------------------------------------------------------------------------------------------------*/

const p1 = document.querySelectorAll('p')
const links = document.querySelectorAll('p a'); // select all a under p 
const id = document.querySelectorAll('#History');

console.log(p1);
console.log(links);
console.log(id); // one node in list coz id is unique in html document 

for(let link of links){
    console.log(link.href);
}





















