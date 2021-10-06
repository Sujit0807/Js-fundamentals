/* Truthy and Falsy Values : # ALl javascript have values have an inherent
                              truthyness or falsyness about them

Falsy Values: 1.false
              2.0 (zero)
              3."" (an empty string)  
              4.null
              5.undefined
              6.NaN

Truty values: EVERYTHING ELSE IS TRUTHY i.e "string"
------------------------------------------------------------------------------*/

const userInput = prompt("Enter Something");

if(userInput){
    console.log("TRUTHY!!");
}else{
    console.log("FALSY!!");
}

if(false){
    console.log("TRUTHY!!");
}else{
    console.log("FALSY!!"); // op
}

if(""){
    console.log("TRUTHY!!");
}else{
    console.log("FALSY!!"); // op
}

if(" "){
    console.log("TRUTHY!!"); // op
}else{
    console.log("FALSY!!"); 
}

if(0){
    console.log("TRUTHY!!");
}else{
    console.log("FALSY!!"); // op
}

if(-1){
    console.log("TRUTHY!!"); // op
}else{
    console.log("FALSY!!"); 
}

if(21210){
    console.log("TRUTHY!!"); // op
}else{
    console.log("FALSY!!"); 
}

if(null){
    console.log("TRUTHY!!");
}else{
    console.log("FALSY!!"); // op
}

if(undefined){
    console.log("TRUTHY!!");
}else{
    console.log("FALSY!!"); // op
}

if(NaN){
    console.log("TRUTHY!!");
}else{
    console.log("FALSY!!"); // op
}




