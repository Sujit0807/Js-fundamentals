/*---------------------------------------------------------------------------------------------------------------------------
Traversing parent/child/sibling : # parentElement gives us parent element object
                                  # every element has one direct parent except html element

                                  # children gives us childrens of parent
                                  
                                  # nextSibling and previousSibling ---> gives us text node

                                  # nextElementSibling & previousSibling
---------------------------------------------------------------------------------------------------------------------------*/
const firstBold = document.querySelector('b');

console.log(firstBold); // bold tag
console.log(firstBold.parentElement); // p tag
console.log(firstBold.parentElement.parentElement); //body tag
console.log(firstBold.parentElement.parentElement.parentElement); // html element
console.log(firstBold.parentElement.parentElement.parentElement.parentElement); // null


const paragraph = firstBold.parentElement;

console.log(paragraph.childElementCount); // 8 --> counts it's childrens
console.log(paragraph.children); // html collections of childrens
console.log(paragraph.children[0]); // <b>Silkie</b> this is actually an object


const firstImg = document.querySelector('.square');

console.log(firstImg.parentElement); // body
console.log(firstImg.nextSibling); // text node  --> 
console.log(firstImg.previousSibling); // text node

console.log(firstImg.nextElementSibling); // 2nd img element object
console.log(firstImg.nextElementSibling.nextElementSibling); // 3rd img element object

console.log(firstImg.previousElementSibling); // para tag object
console.log(firstImg.previousElementSibling.previousElementSibling); // h2 tag object
console.log(firstImg.previousElementSibling.previousElementSibling.previousElementSibling); // div object






























