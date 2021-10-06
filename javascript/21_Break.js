// Break Keyword : Gets out of loop

// let input = prompt("Hey, say something!");
// while(true){
//     input = prompt(input).toLowerCase();
//     if(input === 'stop copying me'){
//         break;
//     }
// }console.log("OK YOU WIN!");


for(let i=0;i<=10;i++){
    console.log(i);
    if(i==6){
        break;
    }
}

//Continue Keyword : it will continue by ignoring only that conditions
for(let i=0;i<=10;i++){
    if(i==6){
        continue;
    }console.log(i);
}

















