/**
 * 4. Objects
 *    Collection of name-value pair
 *    {
 *      1: "akshay",
 *      2: 34,
 *    }
 *    we can have nested objects
 *    each key schould be unique
 *    you can give a funtion to the object
 */

// one way
var myName = {1: "akshay"};
console.log(myName);
//another way
var myObj = new Object();
// litreal syntax
var myOtherObj = {   
    1: "dksjhgfsd",
    2: "kdsjhfa",
    3: "fljsdhf",
    type: 'jdhgfs',
    sayHi: function() {
        console.log('hi');
    },
    sayType: function() {
        console.log('hi' + this.type);
    },
};
myOtherObj['key'] = "fkijsadhf";
myOtherObj['key'] = [1,2,3];
myObj['1'] = "akshay";
myObj['2'] = "happy";
console.log(myObj);
console.log(myOtherObj);
// access 

console.log(myOtherObj['key']);
console.log(myOtherObj.key);
console.log(myOtherObj['1']);
myOtherObj.sayHi();
myOtherObj.sayType();


//  Constructor pattern to create the object
function DountConstructor(type, glazed, sweetness, hasChocolate) {
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType2 = function() {
        console.log('Type: ' + this.type);
    }
}
var coconutDount = new DountConstructor("coconut", false, 8, true);
console.log(coconutDount);