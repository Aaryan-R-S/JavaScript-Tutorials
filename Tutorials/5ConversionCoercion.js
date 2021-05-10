console.log("");

let x=34;
console.log(x);  //no.

x=String(34);
console.log(x);  //string

let y=String(true);
console.log(y);   //string

let d =String (new Date()) ;
console.log(d , typeof d); //string

//see diff. in length
let a = String([32,25,353,3])
console.log(a.length, a)

a = [32,25,353,3]
console.log(a.length, a)

let z=Number("2323")
console.log(z, typeof z)

z=Number("23ds23") //not allowed
console.log(z, typeof z)

//decimal 
let q =Number('866.778')
console.log(q.toFixed(2), q)

//type coercion
let s='yo'
let w='34'
let e='29'
console.log(s+w+e)

