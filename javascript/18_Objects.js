/* Objects : # Objects are collection of properties
             # Properties are a key-Value Pair
             # Objects are not ordered
             # Raher than using index to access data, we use custom keys
             # e.g In post, In Tracking exercise , comments 
-----------------------------------------------------------------------------*/

const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2.13',
    arr1 : [15,20,35]
};
console.log(fitBitData);
console.log(fitBitData.arr1);
console.log(fitBitData.totalSteps);
console.log(fitBitData["avgGoodSleep"]);
console.log(fitBitData["avg" + "Good" + "Sleep"]);   // --> Ridiculous, we can do like this also and getting same op
console.log(fitBitData.avgCalorieBurn);
console.log(fitBitData.arr1[0]);
console.log(fitBitData.arr1[2]);

// Another Ex : way how objects are used in Reddit website

let comment = {
    username : 'SillyGoose420',
    downVotes : 19,
    upVotes : 214,
    netScore : 195,
    commonText : "Tastes like chicken lol",
    tags : ['Hilarious','funny','silly'],
    isGilded : false
};

// always be remember of whever we are accessing first parent object then we can use all above syntaxes but 
//   when we are nesting down parent to children object the first object with key should be access like data[key] and
//   then we can use dot '.' to access second one 
console.log(comment["username"]);
console.log(comment["upVotes"]);
console.log(comment.downVotes);
console.log(comment['netSore']);
console.log(comment['netScore']);
console.log(comment.tags);
console.log(comment.tags[2]);

// All keys are converted to strings except symbol

const years = {
    1999 : "Good",
    2020 : "Worst",
    2021 : "Too Worst"
};

let birthyear = "2001";

console.log(years[1999]);  // This is also okk for Numbers --> coz it first convert number into string
console.log(years['1999']);
console.log(years['2020']);
console.log(years[2021]);


/*----------------------------------Modifying Objects Value -------------------------------------------*/

const mideterms = {"Sam" : 85, "Colt" : 90, "Sujit" : 89};
console.log(mideterms.Sujit = 90);
console.log(mideterms['Sam'] = 91);
console.log(mideterms["Colt"] = 92);
console.log(mideterms);

console.log(mideterms.Sujit = 'A');
console.log(mideterms.Sam = 'A+');
console.log(mideterms['Co'+'lt'] = 'A+');
console.log(mideterms);

console.log(mideterms.Hermione = 'A-');
console.log(mideterms.Atharv = 'A-');
console.log(mideterms);









