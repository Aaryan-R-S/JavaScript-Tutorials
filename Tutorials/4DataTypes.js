// 1. Primitive Data Type--   stored in stack
// e.g.--

//strings("cjdscii3283"), 
let x ="hi"
console.log("My data type is "+ (typeof x))

//numbers(734), 
let y =23
console.log("My data type is "+ (typeof y))

//boolean(true/fALSE), 
let z =true
console.log("My data type is "+ (typeof z))

//null(), 
let a =null
console.log("My data type is "+ (typeof a))

//undefined(undefined), 
let b =undefined
console.log("My data type is "+ (typeof b))

//symbols--recently introduced

// 2. Reference Data Type--   store in heap
//e.g. --

//arrays, 
let c =[undefined, false, 4, 35, 545]
console.log("My data type is "+ (typeof c))

//object, 
let d ={
    qwe:55,
    ddfa:32,
    cskm:34.25
//  dacs dcfds: 445   --space not allowed /error
// "dacs dcfds" : 445   --no error
}
console.log("My data type is "+ (typeof d))


//functions, 
function po(){
    
}
console.log(typeof po)

//dates
let aj= new Date()
console.log(typeof aj)


