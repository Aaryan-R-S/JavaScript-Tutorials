console.log('');
console.log('Tut 57');

//Map similar to object -- use any type of value

// create
const map1 = new Map()

//set values
let key1 = {name:"axk"}
map1.set(key1, 'My first key')
map1.set("key2", 'My second key')
map1.set("key3", "My third key")

//OR  if u want to include function 
// (not possible in object)
map1.set(function(){},'My empty funct')

//print
console.log(map1);

// getting values from Map 
console.log(map1.get("key2"));

console.log('');

//get values with keys
for([key, value] of map1){
    console.log(`The ${key}of person is ${value}`);
}

console.log('');
//get only keys
for(a of map1.keys()){
    console.log(a);
}

console.log('');
//get only values
for(a of map1.values()){
    console.log(a);
}

console.log('');
//converting to array
let arr = Array.from(map1)
console.log(arr);

let arrV = Array.from(map1.values())
console.log(arrV);

let arrK = Array.from(map1.keys())
console.log(arrK);





