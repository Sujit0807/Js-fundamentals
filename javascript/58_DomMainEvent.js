/* --------------------------------------------------------------------------------------------------------------
   addEventListener() : $ we prefer this one over inline events
                        $ specify the event type and a callback to run
                        $ first parameter --> event and second parameter --> function
                          and third parameter --> different options like  once 
----------------------------------------------------------------------------------------------------------------*/

const button =  document.querySelector('#v3');
// button.addEventListener('click',function () {
//     alert('CLICKED!');
// });

// button.addEventListener('dblclick',() => {
//     console.log('CLICKED!!');
// });

button.addEventListener('mouseup',() => {
    console.log('MOUSE UP!!');
});

function Twist(){
    console.log('TWIST!');
}

function Shout(){
    console.log('SHOUT!');
}

const tasButton = document.querySelector('#tas');
// i wan't add both twist and shout, but here getting only op as shout which is at last
// tasButton.onclick = Twist;
// tasButton.onclick = Shout;

// but if we use addEventListener() --> then we will get both 
tasButton.addEventListener('click',Twist,{once : true});   // this will runs once then it will remove this event listener
tasButton.addEventListener('click',Shout);



























