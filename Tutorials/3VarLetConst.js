//   Var  | let   | const

var name = 'ARS';
var age;//no value only declared--so undefined

var marks;
//  const marks;      give error so u have to declare it 
marks=99
marks=100 //var takes Later value...

console.log(name, age, marks);

//rules
//  1. cannot start with no.s
//  2. can start with letters, underscore(_), $
//  3. case sensitive

const _x = 2
console.log(_x)

const _X = 4
console.log(_X)

//block
let a='plm'
    {
      let a='mlp'
      console.log(a)
    }
console.log(a)

//const can be changed but not be overwritten
const z=[1,35,31,32,23];
z.push(0);
console.log(z);

//case types in programming--
//   1. camelCase   (preferred)
//   2. PascalCase
//   3. kebab-case
//   4. snake_case