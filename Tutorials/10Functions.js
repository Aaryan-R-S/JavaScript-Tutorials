// function--structure
//   function nameoffunction(argument, argument2){
//       console.log(argument, argument2)
//   }

//  var x = "We are the so-called "Vikings" from the north.";  // this is wrong
var x = "We are the so-called \"Vikings\" from the north.";   //this is right
var x = `We are the so-called "Vikings" from the north.`;   //this is right


var x = "John";
var y = new String("John");
// typeof x will return string
// typeof y will return object

var x = "John";             
var y = new String("John");
// (x == y) is true because x and y have equal values

var x = "John";             
var y = new String("John");
// (x === y) is false because x and y have different types (string and object)

var x = new String("John");             
var y = new String("John");
// (x == y) is false because x and y are different objects

var x = new String("John");             
var y = new String("John");
// (x === y) is false because x and y are different objects


let n1 = 'Yo'
let n2 = 'Bo'
let n3 = 'Lo'
let n4 = 'Go'
w="chla ja"
k="Happy Birthday! "

function j(n, w) {
    console.log(k, n, w)
}

j(n1, w)
j(n2, w)
j(n3, w)
j(n4, w)

// e is used to show no. of insignificant figures --
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

//return means to show output to user

function sumAll() {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

console.log(sumAll(1, 123, 500, 115, 44, 88));

//JSON prop --

//OBJECT :
myObj = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
 }

 myObj.cars.car2 = "Mercedes";
 delete myObj.cars.car2 ;

//ARRAY :
myArr = {
  "name":"John",
  "age":30,
  "cars":[ "Ford", "BMW", "Fiat" ]
};

 for (i = 0; i < myArr.cars.length; i++) {
  x += myArr.cars[i];
}
console.log(x);