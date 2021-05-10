console.log('');
console.log('Tut 58');

//set stores unique values

//create
const set1 = new Set()

//set value-- captures multi values
set1.add('an')

set1.add('is')
set1.add('is')
set1.add('is')
set1.add('is')

set1.add('or')

set1.add(true)

set1.add('`')

set1.add(34)

console.log(set1);

//check present or not
console.log(set1.has(34));
console.log(set1.has('or'));
console.log(set1.has('nor'));

console.log('');
//loop
for(a of set1){
    console.log(a);
}
console.log('');


//delete
console.log(set1.delete(''));
console.log(set1);

//clear all
console.log(set1.clear());
console.log(set1);


console.log('');
//remove duplicates from arrays
let S = [1,3,2,4,1,3,7,2,2,3]

let set = new Set(S)
console.log(set);

let arr = Array.from(set)
console.log(arr);
