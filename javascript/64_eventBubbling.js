const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');


container.addEventListener('click',() => {
    container.classList.toggle('hide');
});

button.addEventListener('click',(e) => {
    // console.log(e);
    container.style.backgroundColor = makeRandColor();
    // after changing color i want to stop hiding(i.e stop event bubbling ) --> so use stopPropagtion() method
    e.stopPropagation();
});



const makeRandColor = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r},${g},${b})`; 
}