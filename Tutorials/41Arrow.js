console.log('');
console.log('Tut 41');

//Functions different ways

//First
function x(){
    console.log('GM!');
}
x()

//Second
let y = function(){
    console.log('GM!');
}
y()

//Third
let z = ()=>{
    console.log('GM!');
}
z()

//single parameter
const greet = name => 'Hi ' +name 
console.log(greet('ARS'))

//multiple parameter
const greet2 = (name,txt) => 'Hi ' +name +txt
console.log(greet2('Harry',' Thanku'))
