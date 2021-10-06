document.querySelector('button').addEventListener('click',function (evt) {
    console.log(evt); // we will see mouseEvent object and we are not passing any argument to func parameter
    // client x and y are co-ordinates 
});

const input = document.querySelector('input');
input.addEventListener('keydown',function (){
    console.log('KEYDOWN');
});

input.addEventListener('keyup',function (evt){
    console.log(evt);  // keyboard event
    console.log(evt.key);  // value of key
    console.log(evt.code); // value of key code
    // console.log('kEYUP');
});

window.addEventListener('keydown',function (event) {
    // console.log(e.code);
    switch(event.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        default:
            console.log('IGNORED!');
    }
})