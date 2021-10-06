// Nested arrays and objects : ex. In real life post like on instagram, Twitter and reddit etc we can see nested arrays and objects.

const comments = [
    {username : "Tammy", text : "lololol", votes : 9},
    {username : "FishBoi", text : "glub glub", votes : 12387}
];

console.log(comments[0].username);
console.log(comments[0]['text']);
console.log(comments[1].username);
console.log(comments[1]['votes']);
console.log(comments[1]['votes'] = 10);
console.log(comments[0]['votes'] = 11);
console.log(comments);


const details = {
    Names : ["Rahul","Atharv",'Pankaj',"Vasant","Pradhan",'Sam'],
    rollNumbers : [15,20,35,44,58,68]
}

console.log(details.Names[0]);
console.log(details.Names[5]);
console.log(details['Names'][0]);
console.log(details['rollNumbers'][5]);
console.log(details['Names'].push("Hermione"));
console.log(details['rollNumbers'].push(12));
console.log(details.Names.push("Anjali"));
console.log(details.rollNumbers.push(13));
console.log(details);
