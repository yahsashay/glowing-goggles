// Types

// 1. Number 
//    js does not diffrentiate between floot and integers

console.log(typeof(10)); // Number
console.log(10  % 3) // remainder  ans 1
console.log(Math.PI); // 3.14.....
console.log(Math.random());
console.log("10" + 123);  // "10123"
console.log(parseInt("10")) // 10
console.log(parseInt("hello")); // NaN
console.log(isNaN(1)); // false
console.log(isNaN(parseInt("hello"))); // true
/*
    2.Strings
      Sequences of Unicode characters
 */

console.log("Hello");
console.log("aksh ay".length);
console.log("akshya".charAt(1));
// + do concatenationj
console.log("akshay".toUpperCase());