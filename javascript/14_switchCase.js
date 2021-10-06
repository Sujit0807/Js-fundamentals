/* Switch Statement : It is another control flow statements
                      that can replace multiple if statements
---------------------------------------------------------------------*/
const day = 6;
switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
    case 7 :                               // if both same do like this
        console.log("WEEKEND!!");    
        break;
    default :
        console.log("Enter correct day!!");
}






























