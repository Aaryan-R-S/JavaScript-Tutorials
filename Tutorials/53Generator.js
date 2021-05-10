console.log('');
console.log('Tut53');

//Generators
function* genrt(){
    let i =0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    // OR

    while(true){
    //  yield i++;                                  // for no.s in form of numbers
        yield (i++).toString();                     // for no.s in form of strings
    }
}

const z = genrt()

//same as iterator like .value & .done

console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());

//continue forever




