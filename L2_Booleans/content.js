/**
 * 3. Booleans
 *    if some variable has some content they are true Boolean of that var
 *    truty or falsy
 */

 var shouldBeTrue = true;
 var shouldBeNull = null; // behave as false
 console.log(shouldBeTrue);
 console.log(shouldBeTrue === false);
 if(shouldBeTrue) {
     console.log("hello");
 } else {
     console.log("nice but false");
 }
 var hasContent = "skdjghfskj";
 var doesNotHaveContent = "";
 console.log(Boolean(hasContent)); // true
 console.log(Boolean(doesNotHaveContent)); // false
 console.log(Boolean(0)); // false
 console.log(Boolean(1)); // true
 console.log(Boolean(49856)); // true
 var nonAssignedValue;
 console.log(Boolean(nonAssignedValue)); // false
 console.log(Boolean(false)); // false
 var isNotNumber = NaN;
 console.log(Boolean(isNotNumber)); // false
 var myArray = [];
 console.log("this will evaluate to true because it has some form value", Boolean(myArray));
 console.log(null === undefined); // false  both are different