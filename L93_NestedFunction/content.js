// ES6 function Expression

var sayHi = function() {
    console.log('Hi');
}

sayHi();

// es6 way array function
var sayHi2 = () => {
    console.log('Hi');
}

const multiplier = (num1, num2) => {
    return num1*num2;
}

const users = [
    {
        name: "Akshay",
        age: 24,
    },
    {
        name: "Chris",
        age: 60,
    },
    {
        name: "Happy",
        age: 22,
    }
];

// const userMap = users.map(function(user) {
//     return user.name;
// });

// es6 way
const userMap = users.map((user) => {
    return user.name;
})
//with implicit return
const userMap2 = users.map((user) => user.name);
// for one line we can skip curly braces and alse return statement


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredNumbers = numbers.filter(function(num) {
//     return num%2 === 0;
// });
// es6 way 
const filteredNumbers = numbers.filter((num) => num%2 === 0);

console.log(filteredNumbers);

// example

function numberMultiplier(x, y) {
    return x * y;
}
console.log(numberMultiplier(5)); // NaN
// solution
// function numberMultiplier(x, y) {
//     x = x || 5;   // default value
//     y = y || 10;
//     return x * y;
// }

console.log(numberMultiplier(5)); // NaN

// now es6 have indroduced a default value system
const multi = (x = 5, y = 10) => x * y;

// string spliter
const spliter = (str = "AKSHAY is smart BOI") => str.split(" ");

const bankAccount = {
    canSpendMoney: true,
    balance: 100,
};

function canPurchaseItem(Price, acct = bankAccount) {
    if(acct.canSpendMoney) {
        acct.balance -= Price;
        if(acct.balance <= 0) {
            acct.canSpendMoney = false;
        }
        return true;
    } else {
        return false;
    }
}

// example

function logAllArgument(x, y, z) {
    console.log(arguments); // javascrit create this object of all arguments
    // even if you pass 10 agument it will catch all
    // stll not array 
    // we can'y use array function here because argument is objects
}
console.log(logAllArgument);

// solution 
function logAllArgument2(x) {
    const args = Array.prototype.slice.call(arguments, logAllArgument2.length);
    console.log(args);
}
logAllArgument2(1, 2, 3, 4, 5, 6, 7);

// es6 way Rest Parameters
function logAllArgument3(x, ...nums) {
    console.log(nums.sort());
}
logAllArgument3();

// function as a constructor
function Dog(years, breed) { // no fat errors
    this.age = years;
    this.type = breed;
}

const spike = new Dog(3, 'golden Retreiever');

const fido = new Dog(7, "pit bull");

// how this keyword is used in function and fat arrrow
// this is winow object in normal and arraw function  but in constructor function it is a current object

function testFunction() {
    'use strict'
    console.log(this); // here this is undefined
}

function Dogs(years, breed) { // no fat errors
    this.age = years;
    this.type = breed;
    setInterval(function() {
        console.log(this)  // here it is a global widoe object
    }, 1000);
}

//solution
function Dog2(years, breed) { // no fat errors
    const that = this;
    this.age = years;
    this.type = breed;
    setInterval(function() {
        console.log(that)  // problem solved
    }, 1000);
}

// es6 way
// so in arraw function it will not change context so this might work
// they inherit the this context
function Dog3(years, breed) { // no fat errors
    this.age = years;
    this.type = breed;
    setInterval(() => {
        console.log(this)  // problem solved
    }, 1000);
}