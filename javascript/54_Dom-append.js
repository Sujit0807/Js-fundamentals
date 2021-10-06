/* ---------------------------------------------------------------------------------------------------------
Append & AppendChild : 

createElement()  : # it creates the new html element object
                   # always pass the element in quotes

appendChild()    : # we append the child element in html body

append()         : $ allows us to append two or more nodes at a time

prepend()        : # allows us to prepend the things

insertAdjacentElement() : insert element in between 
---------------------------------------------------------------------------------------------------------*/

const newImg = document.createElement('img');  // create empty html img object

console.dir(newImg);
newImg.classList.add('square');
newImg.src = 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
// but still it is not shown on page
// now we have to append it onto page
document.body.appendChild(newImg); // it will come at last



const newH3 = document.createElement('h3');

console.log(newH3); // empty h3 element object
console.dir(newH3);
newH3.innerText = "HELLO, I AM NEW !";
document.body.appendChild(newH3);



const newP = document.querySelector('p');
newP.append('HEYY I AM NEW P YAAAAAAYY!',' New piece of text');  // append to inside the end of that paragraph
// if we try with appendChild this will gives us the error




const newB = document.createElement('b');

newB.append('This is Bold');
newB.prepend('Begining');
console.log(newB);
document.body.appendChild(newB);



// to insert inbetween of two elements
const h2 = document.createElement('h2');
h2.append('Are adorable Chikens');
console.log(h2);

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend',h2);
console.log(h1.nextElementSibling);



// after()
const h3 = document.createElement('h3');
h3.innerText = 'I am h3 element';
h1.after(h3);

















