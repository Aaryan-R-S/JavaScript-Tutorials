"use strict";
//means strict mode enabled

console.time('Code execution time');

//types of inputs--
console.log('Hi!');//strings
console.log(23+382);//number
console.log(true);
console.log(Infinity);

//array--
console.log([283,323,232,233]); 

//object--
console.log({Name: "ARS", Marks: 99});

//log to table view of object
console.table({Name: "ARS", Marks: 99});

//warning
console.warn("YUP!");

//clear console data--
//    console.clear();

//assert
var x=2
console.assert(x>1, "x<1 is not possible")//executed

var x=0
console.assert(x>1, "x<1 is not possible")//notexecuted--error

console.timeEnd('Code execution time');

/* multiline
 comment*/

/*   OR    */

//  multiline
//  comment

 