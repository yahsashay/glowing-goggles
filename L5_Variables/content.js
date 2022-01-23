/**
 * Variables
 * 
 * placeholder that stores a data values   
 * you don't have to be think about types   all are same defined
 * 
 * es5 way     var myName = "Chris";
 * 
 * now i can use that variable anywhere in my programme
 * 
 */
var myName = 'Akshay';
console.log(myName); // Akshay

var lastName = 'Singh';
console.log(lastName);

// it can contain all sort of things
// numbers, array  and objects etc

var myArray = [1, 2, 3, 4, 5, 'lshgdus'];
console.log(myArray);

var myObject = {
    name : 'Chris',
    age: 30,
}
console.log(myObject);

//  you can use type of to know the type of the variables
console.log(typeof myName);
console.log(typeof myArray);
console.log(typeof myObject);

function sayHi() {
    console.log('Hi' + ' ', myName)
}

sayHi()
sayHi()
sayHi()

// you can re-assign the varibles

myName = 'Jane';  // this is good if you want do it
// but you can restrict with const 


var count = 1;
function increase() {
    count += 1;
    console.log(count)
}
increase();// 2
increase();// 3
increase();// 4
// they are case sensitive

var amAkshay = true; // booleans value
var iamNull = null;  // non existance
var valueUndefuned; // undefined
console.log(valueUndefuned);

// scope

var myName = 'Bob';  // global variable
function  sayName() {
    var myName = 'Chris'; // local variablerr confined to the function
    console.log(myName);
}

 console.log(myName);
 sayName();

 // don't decale two time the same varialble not a good practice

 //  special keywords   don't use
 // you can't stat with a number
 // you can start with a hypen

  var _name = 'dkjfhgsj';
  console.log(_name)
