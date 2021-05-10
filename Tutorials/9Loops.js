//types of loops--for, while, do-while

let a= 1
a++;
console.log(a)

//For loop
for (let x = 0; x <= 100; x++) {
    console.log(x);   
}

console.log(" ")

//While loop--see diff b/w hte two outputs
let y = 0
while(y<10){
    y++;
    console.log(y)
}
console.log(" ")
console.log(y)

console.log(" ")

let z = 0
while(z<10){
    console.log(z)
    z++;
}
console.log(" ")
console.log(z)
console.log(" ")

//do-while loop-- allow atleast one time to run
let q = 1
do{
    console.log(q)
    q++
}
while(q<5)

console.log(" ")

q = 112
do{
    console.log(q)
    q++
}
while(q<5)

//stop the loop
q = 1
do{
    console.log(q)
    if(q==5){
        break;
    }
    q++
}
while(q<10)

console.log("done ")

//skip one step in loop
q = 1
do{
    if(q==5){
        q++;
        continue;
    }
    console.log(q)
    q++
}
while(q<10)

console.log("done ")

//  for Each/of-- for arrays
let n= [2,54,6,24,0,64,564]
n.forEach((Element)=>{
    console.log(Element)
})
//OR
for (element of n){
    console.log(element)
}

//for In for objects
let o = {
    name: 'poplu',
    age: 35,
    os:'ubuntu',
    'contact no': 2342431152
}
for(key in o){
    console.log(`The ${key} of employee is ${o[key]} `)
}