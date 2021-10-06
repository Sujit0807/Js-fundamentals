/* Why do people use const with arrays ?
---> coz we want like content may change but not the address/reference.

In Case Array : # The value can change as long as the reference remains same
                  but with primitive one we can't change content
*----------------------------------------------------------------------------*/

const array = ["blue","red","green","pink","yellow"];
array.push("purple");
array.push("Indigo");
array.pop();
array.shift();
array.unshift(10);
array[0] = "Blue";
console.log(array);

// array = ["blue","red","green","pink","Yellow"]; 
// Error --> Assignment to const operator(Even though our content is same)


















