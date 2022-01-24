/**
 * Comparison Operators
 * 
 * === identity operator
 * == equality op0erator
 * 
 * == will check equality but will do type conversion first
 */

// 2 == '2' true
// 2 === '2'  false

// 2 + '2'   '22'
// javascript some time do the type conversion for you
// you have to take care of this behaviour


//const number =  parseInt(string) // convert to int


const myArray = [1, 2, 3];
const myArray2 = [1, 2, 3];

console.log(myArray === myArray2) // FALSE  they are pointing to two different location
console.log(myArray == myArray2)  // false same reason

muOtherArray = myArray

console.log(myArray === muOtherArray) // true  because exact copy of the array
console.log(myArray == muOtherArray)  // true
// this behaviour is same with object

// Simple if statement
const myFirstNumber = 123;
const mySecondNumber = 120;
if(myFirstNumber === mySecondNumber) {  // we can use > greater than
    console.lof('both no are equal');
}

// >  greater than  >= greater than equals to
// <  less than     <= less than equals to
// ===  equals to
// !== not equals to