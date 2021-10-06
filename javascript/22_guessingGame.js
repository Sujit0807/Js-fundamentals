
let maximum = parseInt(prompt("Enter the maximum number !"));        // 10 --> Truthy   hence !10 --> falsy  and therefore
while(!maximum){                                                     // NaN --> Falsy hence !NaN --> true(i.e user has entered string)
    maximum = parseInt(prompt("Enter a valid number !"));
}

const tarNum = Math.floor(Math.random()*maximum) + 1;    

let guess = parseInt(prompt("Enter your first guess:"));
let attempts = 1;

while(parseInt(guess) !== tarNum){
    attempts++;
    if(guess === 'q'){
        break;
    }
    if(guess > tarNum){
        guess = prompt("Your number is too high");
    }else{
        guess = prompt("Your number is too low");
    }
}

if(guess == 'q'){
    console.log("Okk, YOU QUIT!");
}else{
    console.log("CONGRATS YOU WIN!");
    console.log(`YOU GOT IT!! It took you ${attempts} guess`);
}


























