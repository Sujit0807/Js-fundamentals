/* question : why it is showing false ?
   Answer : Because javascript is not comparing array and its content, but comparing the references in memory 
-----------------------------------------------------------------------------------------------------------*/
console.log('hi' == 'hi');     // true
console.log(['hi'] == ['hi']); // false
console.log(['hi'] === ['hi']);// false
console.log(['hi','bye'] === ['hi','bye']); // false

console.log([] == []);    // false
console.log([1] == [1]);  // false
console.log([1] === [1]); // false
console.log([1,2] === [1,2]); // false

// For ex :
let nums = [1,2,3];
let numsCopy = nums;  // numsCopy refering to same address in memory
numsCopy.push(4);
console.log(nums);    // [1,2,3,4] 
console.log(numsCopy);// [1,2,3,4]
console.log(nums === numsCopy); // true coz has same memory location

