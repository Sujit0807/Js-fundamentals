const makeRandColor = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r},${g},${b})`; 
}


const h2s = document.querySelectorAll('h2');
for(let h2 of h2s){
    h2.addEventListener('click',function () {
        console.log(this);
        this.style.backgroundColor = makeRandColor();
        this.style.color = makeRandColor();
    })
}

const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click',colorize);
}

function colorize() {
    console.log(this);
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}


// keyword 'this'  refers to whatever event handler (e.g clicked on) done









