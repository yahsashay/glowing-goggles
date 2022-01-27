// Functions
/**
 *  "A function is a javascript procedure -  a set os a statements that performes a task or calculates a value. [...]"
 *    - Mozilla Developer Network
 */

function sayHi() {
    //any logic
    console.log('Hi');
}
// noe this function is to be invoked

sayHi(); // Hi

function sayHi2(userName) {
    console.log("Hi" + " " + userName)
}

sayHi2("Akshay"); // Hi Akshay

// return keywoed

function numberDouble(num) {
    // console.log(num*2) 
    return num*2;
}

const value = numberDouble(10);
console.log(value) // 20

// hoisting  
// when the js code is compiled all the function are placed at the top of the code. 

const myName = "Akshay";
function sayHi() {
    if(!myName) {
        var myName = "Bob";
    }
    console.log("Hi" + " " + myName);
}
sayHi();
// hi Bob will be printed because of the hoisting of the function
// do write pure function insted of impure

// Pure functions
// In simple terms, pure functions do not have an internal state. Therefore, all operations performed in pure functions are not affected by their state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function.

// To get a better understanding, let’s consider the following example

function add(a,b) {
    return a + b;
}
console.log(add(4,5));

// expression 

var sayBye = function(myName) {
    console.log("Hi bYE")
}
// hoisting will not happen here

// passing a funtion to a other function invoking it their

const squaredNumber = function(num) {
    return num*num;
}

const numberAdder = function(squarer, num2) {  // here i pased a function squarer
    const squared = squarer(4);
    return squared + num2;
}

console.log(numberAdder(squaredNumber, 10));


