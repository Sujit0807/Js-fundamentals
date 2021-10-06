/* ----------------------------------------------------------------------------------------------------------------
DOM :

dir : # dir() method gives us the properties specified in javaScript Object


console.dir(document);  // this gives us an objects of html document 
console.log(document.all); // array of elements  --> htmlCollection
console.log(document.all[10]);

document.all[10].innerText = 'chicken';

console.log(document.all[10].innerText); 


----------------------------------------------------------------------------------------------------------------
getElementById() : $ Selects the html elements by id
                   $ REMEMBER we are writing ID in quotes

----------------------------------------------------------------------------------------------------------------*/
const banner = document.getElementById('banner');  
const toc = document.getElementById('toc');

console.log(banner);
console.log(toc);


// selecting from DOM object.  
console.dir(banner);
console.dir(toc);
// console.clear();


/*----------------------------------------------------------------------------------------------------------------
getElementsByTagName() : $ selects html element by tagName
                         # they are all objects
                         $ elements is plural its element'S coz they are selecting all
                         $ it return HTML COLLECTION it looks like array but it is not an array

HTML COLLECTIONS : # it has length property
                   # it is iterable i.e we can loop over it                        
----------------------------------------------------------------------------------------------------------------*/

const allImages = document.getElementsByTagName('img');
const allPara = document.getElementsByTagName('p');

console.log(allImages);
console.log(allPara);
console.log(allImages[0]);

console.log(typeof allImages); // object

for(let img of allImages){
    console.log(img.src);
    // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

// console.clear();


/*----------------------------------------------------------------------------------------------------------------
getElementsByClassName() :  $ selects html element by ClassName
                            $ elements is plural its element'S coz they are selecting all
----------------------------------------------------------------------------------------------------------------*/

const squareImages = document.getElementsByClassName('square');

console.log(typeof squareImages);  // Object

for(let img of squareImages){
// img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
    console.log(img.src);
}






















