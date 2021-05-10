console.log('');
console.log('Tut 59');

//symbols are primitive but unique
// syntax -- Symbol(identifier)

const x = Symbol('Hi')
const y = Symbol('Hi')

console.log(x);
console.log((typeof x));

/// bcz symbols are unique so it will give false
console.log(x==y);        

//Used to make objects 
//Ignored in loops ..just used in unique

// syntax -- Symbol(identifier)

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["name"] = "Good boy"
myObj[467] = "Good int"


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["k2"]


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}

console.log(JSON.stringify(myObj));



