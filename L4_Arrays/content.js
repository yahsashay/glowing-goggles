/**
 * 5. Arrays
 *    sort of a special tpye of objects.
 *    collection of data
 * 
 *    length of an array is highest index + 1
 *    preferred way of deffining is literal way
 *    var myArray = [1, 2, 3, "aksjhay", true];  <- this is way
 *   
 */

// Arrays
var myArray = [1, 2, 3, "aksjhay", true];
console.log(myArray[0], " - ", myArray[3]); // 1 ' - ' 'aksjhay'
console.log(myArray.length); // 5

// another way of declaring a array
var arrNames = new Array();
arrNames[0] = "akshay";
arrNames[1] = "chris";
console.log(arrNames) ;
// [
// "akshay",
//     "chris"
// ]

arrNames[100] = "happy";
console.log(arrNames);
// [
//     "akshay",
//     "chris",
//     null*98,
//     "happy"
// ]
var myArr = [ 'akshay', 'happy', 'chris'];
myArr.push('bob'); // push at the back of the array
console.log(myArr);
var last = myArr.pop();
console.log(myArr, "<- array  ", last, "<- last name");
// we can push as many as we needed
// or even push a array
myArr.push(['sza', 'sged']);
console.log(myArr); // now last ele is a aaray

var sortedArray = myArr.sort();  // even myArr is sorted
console.log(sortedArray, "this the sorted array ", myArr);
sortedArray.reverse();
console.log(sortedArray, "this the reverse array");

// concatenate two array
var otherArr = [ 'jimmy', 'cathay'];
var concatedArray = myArr.concat(otherArr); // myArr still is the same
// actually we can concatenate like this var concatedArray = myArr.concat(otherArr, thirdarray)
console.log(concatedArray, myArr);

var slicedArray = concatedArray.slice(3);
/**
 * (a,b)  start slicing from index a to the index b
 * if you don't give b it will do it the end of the array
 *  */ 
console.log(slicedArray);
var joinedArray = myArr.join('akshay');
console.log(joinedArray, myArr); // will makeit a long string separated my hypen