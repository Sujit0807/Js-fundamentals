/*------------------------------------------------------------------------------------------------------------------------------ 
innerHTML :   $ this gives us op as html element with content


innerText :   $ changes the inner text of elements
              $ innerText can't shows us display none element content

textContent : $ it is text content not inner content 
              $ it also does same thing like innerText but coz of formating white spaces are there
              $ but main difference between innerText and textContent is textContent shows all the content 
                which is display none but innerText can't
----------------------------------------------------------------------------------------------------------------------------- */
const para = document.querySelector('p').innerText='LOLOLOLOLOL';
const par  = document.querySelector('p').textContent='LOLOLOLOL';

// console.log(para);
// console.log(par); 

const allLinks = document.querySelectorAll('a');

for(let link of allLinks){
    link.innerText = 'I AM A LINK !!';
}



// document.querySelector('h1').innerText = "<i>White Chicken</i>"; // now this is only changing the text only not html element with content 
console.log(document.querySelector('h1').innerHTML); // Silkie Chickens

document.querySelector('h1').innerHTML="<i>White Chickens</i>"; // now this is changing entire element
document.querySelector('h1').innerHTML += "<sup>UP</sup>"; 

console.log(document.querySelector('h1').innerHTML); // give us html content with element


