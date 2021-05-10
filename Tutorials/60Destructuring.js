console.log('');
console.log('Tut 60');

// Destructuring in JavaScript

let a, b;
[a, b] = [34, 564];
console.log(a, b);

// only 1-4 used
// [a, b, c, d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// all 1-13 used as d gets all after 4 upto 13
[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];
console.log(a)
console.log(b)
console.log(c)
console.log(d)


//Array desrtructuring
const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
console.log(a, b, c)

//NOT NECESSARY--

// Object Destructuring
const laptop ={
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function (){
        console.log('started');
    }
}

const {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);