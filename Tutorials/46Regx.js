console.log('');
console.log('Tut 46');

//regx literal
let r = /Hi/;
r = /Hi/i;     // i means case insensitivity
r = /Hi/g;     // g means global

console.log(r)
console.log(r.source)

let y = 'This is Hi great Hi '

//Functions

// 1.exec() -- will return an array for match & null for no match
console.log(r.exec(y));    //1st Hi
console.log(r.exec(y));    //2nd Hi
console.log(r.exec(y));    // null

console.log(r.exec(y).index);    //1st Hi
console.log(r.exec(y).index);    //2nd Hi

// 2. test() -- returns true or false
console.log(r.test(y))   //as  null was going 
console.log(r.test(y))   // 1st Hi
console.log(r.test(y))   // 2nd Hi
console.log(r.test(y))   // null
 

// 3. match()-- will return an array of results or null

// console.log(r.match(y))     //WRONG
console.log(y.match(r))        //RIGHT - OPPOSITE
 

// 4. search()-- returns index of first match else -1

// console.log(r.search(y))     //WRONG
console.log(y.search(r))        //RIGHT - OPPOSITE


// 5. replace() -- 
//only first
r = /Hi/
console.log(y.replace(r, 'Bye'))
//all
r = /Hi/g
console.log(y.replace(r, 'Bye'))
