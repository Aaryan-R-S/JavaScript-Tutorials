console.log('');
console.log('Tut 47'); 

let regx = /Harry/ 
regx = /^Ha/     //starts with ^X
regx = /..$/     //ends with X$
regx = /go.d/     //contains x  .means any character (no. equals no of dots)
regx = /g*s/     //contains x  *means any no of character in b/w
regx = /Hai?rryu?/    // ? after any char means its optional may or may not be present
 
const str = 'Harry is a good boy! Harry codes well ...'

let result = regx.exec(str)
console.log('The result from exec is '+ result);

if(regx.test(str)){
    console.log('Right');
}
else{
    console.log('Wrong')
}

