console.log('');
console.log('Tut 56');

// ARRAY

let Q = ['cs', 'evwg', 'fe', 'dexgs', 'qat']

//TRADITIONAL
for (let index = 0; index < Q.length; index++) {
    const element = Q[index];
    console.log(element);
}

console.log('');

//MODERN
for (q of Q) {
    console.log(`Bhaag! ${q}`);
}



console.log('');

// OBJECT

let G = {
    name: 'csa',
    lang: 'js',
    age: 45
}

for (g in G) {
    console.log(G[g]);
}

console.log('');

for (g in G) {
    console.log(`The ${g} of person is ${G[g]}`);
}


//Example-- no difference in absence of array or object
let string = 'P!a $wE'

for(s in string){
    console.log(string[s]);
}
for(s of string){
    console.log(s);
}









