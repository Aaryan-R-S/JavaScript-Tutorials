let x =2;
let y= 3;
//operations
let z = x+y
z = x-y
z = x*y
z = x/y
console.log(z)

//math log sqrt
let j = Math.log10(10)
j = Math.sqrt(10)
console.log(j.toPrecision(4))

//power
console.log(Math.pow(2,10))

// min/max
console.log(Math.max(14,45,25,25))

//round up
k = Math.ceil(32.245)
k = Math.floor(32.745)
k = Math.floor(-32.745)
console.log(k)

//random
console.log(Math.random())
// MATH.RANDOM() returns a no. b/w --  0(including) & 1(excluding) --important

//TO AVOID THIS USE THE FOLLOWING TO GET BOTH 0 & 1 INCLUDING --
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
getRandomInteger(0,1)


//random b/w 3(includ) to 56(exclud)
let a = 3+53*Math.random()
console.log(Math.ceil(a))