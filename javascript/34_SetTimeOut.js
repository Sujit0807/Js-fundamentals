/* setTimeout & setInterval : # this is not dealing with arrays but with delaying, pausing, waiting & postponing 
                              # Basically they are NOT array method

1 sec --> 1000 mili sec
3 sec --> 3000 mili sec

------------------------------------------------------------------------------------------------------------------
 setTimeout function :   # accepts value 1.function 2.delay
                         # statements priting out according to delay time

 setInterval function :  # we not often use this
                         # it will call function after every timeInterval infinitely
-----------------------------------------------------------------------------------------------------------------*/

console.log('Hello');  // 1

setTimeout(() => {
    console.log('....are you still there ?')  // 3
}, 3000);

console.log('GOODBYE!!');

setTimeout(() =>{
    console.log('hello');   // 2
},200)



// const id = setInterval(() => { 
//     console.log(Math.random());   // it will execute after every 2 sec(infinitely) 
// }, 2000);

// console.log(id); 
// clearInterval(id) ;   // to stop that exectution


