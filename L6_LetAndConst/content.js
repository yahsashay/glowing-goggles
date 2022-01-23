/**
 * Let and Const
 * 
 * let see what es6 brings to the table
 * 
 */

function sayHi() {
    var shouldSayHi = true;
    if(shouldSayHi === true) {
        var nyName = 'Akshay';
    }

    console.log(myName); // Akshay
    // this is the correct js   but this should not happen as myName has different scope
    // this depends on shouldSayHi
}

// lets nest it even deeper

function sayHi() {
    var shouldSayHi = true;
    var reallySayHi = true;
    if(shouldSayHi === true) {
        var nyName = 'Akshay';
        if(reallySayHi === true) {
            var myLastName = 'Singh';
        }
    }
    myLastName = 'kdxjhvgbs';
    // i still have access in the function (it a valid js)
}

// out side the function myname will give error
// this tells variables are scoped inside the funtion

// Avoid global variables or minimize the usage of global variables in JavaScript. This is because global variables are easily overwritten by other scripts. Global Variables are not bad and not even a security concern, but it shouldn’t overwrite values of another variable.
// On the usage of more global variables in our code, it may lead to a maintenance issue. Let’s say we added a variable with the same name. In that case, get ready for some serious bugs.

// es6 introdues let

function sayHi() {
    var shouldSayHi = true;
    var reallySayHi = true;
    if(shouldSayHi === true) {
        let myName = 'Akshay';  // let is scoped to the block
        if(reallySayHi === true) {
            var myLastName = 'Singh';
        }
    }
    myName  = "dlsjfghsdfjgh" // will show error
    myLastName = 'kdxjhvgbs';
    // for let we will have access down the road but not up the block
}

// right way
function sayHi() {
    var shouldSayHi = true;
    let myName;
    if(shouldSayHi === true) {
        myName = 'Akshay';
        console.log(myName);
    } else {
        myName = 'Bob';
        console.log(myName);
    }
}


// const 

// simmilar to let   but connot be re assign it

// we can't do this (const aaa;)

const MYNAME = 'Chris';
console.log(MYNAME);
MYNAME = 'doigvsho'; // will show the error cannot assign 

// but we can transform the data  array or a object
// you can mutate