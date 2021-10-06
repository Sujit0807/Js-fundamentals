/* ---------------------------------------------------------------------------------------------------------
   removeChild()  : # we have to select parent then removing child

   remove()       : # using this we can remove original element

---------------------------------------------------------------------------------------------------------*/

const firstLi = document.querySelector('li');
console.log(firstLi);
const ul = document.querySelector('ul');
console.log(ul);

ul.removeChild(firstLi);


// doing in one line
const b = document.querySelector('b');
b.parentElement.removeChild(b);


// using remove() BETTER WAY THAN removeChild()
const img = document.querySelector('img');
img.remove(); // now img is removed



/* Properties we seen : # innerHTML 
                        # textContent
                        # innerText
                        # parentElement
                        # children
                        # nextSibling
                        # previousSibling
                        # classList
                        # style

Methods() we seen     : # getAttribute()
                        # setAttribute()
                        # append()
                        # prepend()
                        # appendChild()
                        # remove()
                        # removeChild()
                        # createElement()
*/




























